import styled from "styled-components";
import StyledButton from "../../Button";
import Input from "../../InputField";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

// const FlexContainer = styled.div`
//     width: ${props => props.$width ? `${props.$width}` : "350px"};
//     display: flex;
//     flex-flow: column nowrap;
//     text-align: left;
//     &>textarea {
//         width: 50%;
//         min-width: 350px;
//     }
// `;

function VideoForm() {
    return (
        <form>
            <StyledField>
                <Input inputsArray = {[
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

                <StyledButton type="submit" >Submit</StyledButton>
                <StyledButton>Clear</StyledButton>
            </StyledField>

        </form>
    );
};

export default VideoForm;