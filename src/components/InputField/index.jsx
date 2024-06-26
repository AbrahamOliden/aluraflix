import styled from "styled-components";

const FlexContainer = styled.div`
    width: ${props => props.$width ? `${props.$width}` : "350px"};
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    &>textarea {
        width: 50%;
        min-width: 350px;
    }
`;

const StyledLabel = styled.label` 
    margin: 0 0 16px 5px;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
`;

const StyledInput = styled.input` //? All these styles might be combined
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
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

function Input({ inputsArray }) {

    return (
        <>
            {inputsArray.map(input => {

                switch (input.type) {
                    case "text":
                        return ( //? This better be combined
                            <FlexContainer key={input.id} role="none" >
                                <StyledLabel htmlFor={input.title}>
                                    {input.title}
                                </StyledLabel>

                                <StyledInput
                                    type={input.type}
                                    name={input.title}
                                    placeholder={`Introduce ${input.title}`}
                                    required={input.required} >
                                </StyledInput>
                            </FlexContainer>
                        );
                    case "select":
                        return (
                            <FlexContainer key={input.id} role="none" >
                                <StyledLabel htmlFor={input.title}>
                                    {input.title}
                                </StyledLabel>

                                <StyledDropdown
                                    type={input.type}
                                    name={input.title}
                                    placeholder={`Introduce ${input.title}`} 
                                    required={input.required} >
                                </StyledDropdown>
                            </FlexContainer>
                        );
                    case "textarea":
                        return (
                            <FlexContainer key={input.id} role="none" $width="100%" >
                                <StyledLabel htmlFor={input.title}>
                                    {input.title}
                                </StyledLabel>

                                <StyledTextArea
                                    type={input.type}
                                    name={input.title}
                                    placeholder={`Introduce ${input.title}`} 
                                    cols={50}
                                    rows={10}
                                    required={input.required}>
                                </StyledTextArea>
                            </FlexContainer>
                        )
                    default:
                        return;
                }
            })}
        </>
    );
};

export default Input;