import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import styled from "styled-components";
import Input from "../InputField";
import { ButtonContainer, StyledButton } from "../Button";
import Table from "../Table";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

function Form() {

    const { formData, state, dispatch } = useContext(GlobalContext);
    const location = useLocation().pathname;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        console.log(formData, "category!");
    };


    const videoFormInputs = [
        {
            title: "title",
            type: "text",
            id: 0
        },
        {
            title: "category",
            type: "select",
            id: 1
        },
        {
            title: "image",
            type: "text",
            id: 2
        },
        {
            title: "video",
            type: "text",
            id: 3
        },
        {
            title: "description",
            type: "textarea",
            id: 4
        }
    ];
    const categoryFormInputs = [
        {
            title: "name",
            type: "text",
            id: 0
        },
        {
            title: "color",
            type: "color",
            id: 1
        },
        {
            title: "description",
            type: "textarea",
            id: 2
        }
    ];

    return (
        <form onSubmit={ handleSubmit } >
            <StyledField>
                <Input arrayOfInputs={location === "/new-video" 
                        ? videoFormInputs 
                        : categoryFormInputs}
                    widthOfInputs={location === "/new-category"
                        ? "100%"
                        : null
                    } />

                {location === "/new-category" && (
                    <Table />
                )}
                <ButtonContainer role="none" id="button-container">
                    <div role="none" >
                        <StyledButton type="submit" >Submit</StyledButton>
                        <StyledButton type="reset" >Clear</StyledButton>
                    </div>


                    {location === "/new-video" && (
                        <Link to="/new-category" >
                            <StyledButton>New Category</StyledButton>
                        </Link>
                    )}

                    {location === "/new-category" && (
                        <Link to="/new-video" >
                            <StyledButton>New Video</StyledButton>
                        </Link>
                    )}
                </ButtonContainer>
            </StyledField>
        </form>
    )
}

export default Form