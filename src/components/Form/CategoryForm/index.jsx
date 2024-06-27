import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "../../InputField";
import { StyledButton, ButtonContainer } from "../../Button";

const StyledField = styled.fieldset`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: center;
gap: 60px 30px;
border: none;
`;

function CategoryForm() {
    return (
        <form>
            <StyledField>
                <Input inputsArray={[
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
                ]} />
                <ButtonContainer role="none" id="button-container" >
                    <div role="none" >
                        <StyledButton type="submit">Submit</StyledButton>
                        <StyledButton>Clear</StyledButton>
                    </div>

                    <Link to="/new-video" >
                        <StyledButton type="" >New Video</StyledButton>
                    </Link>
                </ButtonContainer>
            </StyledField>
        </form>
    );
};

export default CategoryForm;