import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

const FlexContainer = styled.div`
    width: ${props => props.$width ? `${props.$width}` : "350px"};
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
`;

const StyledLabel = styled.label` 
    margin: 0 0 16px 5px;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
`;

const StyledText = styled.input` //? All these styles might be combined
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

const StyledDropdown = styled.select` //? and then extend in styled components
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

const StyledTextArea = styled.textarea` //? this 1 2
    width: 50%;
    min-width: 350px;
    height: 180px;
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

const StyledColor = styled.input`
    width: calc( 100% - 36px ); //36 px is for padding and border size
    padding: 16px;
    background-color: var(--dark-gray);
    border: 2px solid var(--blue);
    border-radius: 10px;
    box-sizing: content-box;
`;

function Input({ arrayOfInputs, widthOfInputs }) {
    
    const { categories, formData, setFormData, newVideo, setNewVideo, newCategory, setNewCategory } = useContext(GlobalContext);
    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    };


    const dropDownElements = () => ( //* function for rendering all category options at dropdown (select) element
        <StyledDropdown>
            <option value="" style={{ display: "none" }} >Choose an option</option>
            {
                categories.map(category => (
                    <option key={category.title} value={category.title} >{category.title}</option>
                ))
            }
        </StyledDropdown>
    )

    const renderInput = input => { //* Constant that functions as argument to map arrayOfInputs, returns a container and determines the type of input, as well as styling based on properties

        const inputTypes = {
            text: StyledText,
            textarea: StyledTextArea,
            color: StyledColor,
            select: dropDownElements
        }

        const InputComponent = inputTypes[input.type] || null;

        if (!InputComponent) { //*Error handling in case of some mistake
            console.log(`Input type not supported: ${input.type}`);
            return null;
        };

        return (
            <FlexContainer key={input.id} role="none" $width={
                InputComponent.target === "textarea" //This is so Description input is always 100% width
                    ? "100%"
                    : widthOfInputs} >
                <StyledLabel htmlFor={input.title} >
                    {input.title}
                </StyledLabel>

                <InputComponent
                    type={input.type}
                    name={input.title}
                    placeholder={`Introduce ${input.title}`}
                    required={input.required}
                    onChange={handleChange}
                />
            </FlexContainer>
        )
    }

    return (
        <>
            {arrayOfInputs.map(renderInput)}
        </>
    );
};

export default Input;