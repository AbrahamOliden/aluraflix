import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton, ButtonContainer } from "../../Button";
import Input from "../../InputField";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

function VideoForm() {
    return (
        <form>
            <StyledField>
                <Input inputsArray={[
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
                        id: 4
                    }
                ]} />

                <ButtonContainer role="none" id="new-video-button-container">
                    <div role="none" >
                        <StyledButton type="submit" >Submit</StyledButton>
                        <StyledButton>Clear</StyledButton>
                    </div>

                    <Link to="/new-category" >
                        <StyledButton>New Category</StyledButton>
                    </Link>
                </ButtonContainer>
            </StyledField>

        </form>
    );
};

export default VideoForm;