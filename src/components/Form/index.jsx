import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Input from "../InputField";
import { ButtonContainer, StyledButton, StyledLink } from "../Button";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

function Form() {

    const location = useLocation().pathname;

    const videoFormInputs = [
        {
            title: "title",
            type: "text",
            required: true,
            id: 0
        },
        {
            title: "category",
            type: "select",
            required: true,
            id: 1
        },
        {
            title: "image",
            type: "text",
            required: true,
            id: 2
        },
        {
            title: "video",
            type: "text",
            required: true,
            id: 3
        },
        {
            title: "description",
            type: "textarea",
            required: false,
            id: 4,
            width: "100%"
        }
    ];
    const categoryFormInputs = [
        {
            title: "name",
            type: "text",
            required: true,
            id: 0,
            width: "100%"
        },
        {
            title: "color",
            type: "color",
            required: true,
            id: 1,
            width: "100%"
        },
        {
            title: "description",
            type: "textarea",
            required: false,
            id: 2,
            width: "100%"
        }
    ];

    return (
        <form>
            <StyledField>
                <Input arrayOfInputs={location === "/new-video" 
                        ? videoFormInputs 
                        : categoryFormInputs}
                    widthOfInputs={location === "/new-category"
                        ? "100%"
                        : null
                    } />
                <ButtonContainer role="none" id="button-container">
                    <div role="none" >
                        <StyledButton type="submit" >Submit</StyledButton>
                        <StyledButton>Clear</StyledButton>
                    </div>

                    {location === "/new-video" && (
                        <StyledLink to="/new-category" >
                            <StyledButton>New Category</StyledButton>
                        </StyledLink>
                    )}

                    {location === "/new-category" && (
                        <StyledLink to="/new-video" >
                            <StyledButton>New Video</StyledButton>
                        </StyledLink>
                    )}
                </ButtonContainer>
            </StyledField>
        </form>
    )
}

export default Form