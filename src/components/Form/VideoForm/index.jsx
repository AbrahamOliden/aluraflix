import styled from "styled-components";
import StyledButton from "../../Button";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

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

function VideoForm() {
    return (
        <form>
            <StyledField>
                <FlexContainer role="none">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title or smth" />
                </FlexContainer>

                <FlexContainer role="none">
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" placeholder="category" />
                </FlexContainer>

                <FlexContainer role="none">
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" placeholder="image " />
                </FlexContainer>

                <FlexContainer role="none">
                    <label htmlFor="source">source</label>
                    <input type="text" name="source" placeholder="source" />
                </FlexContainer>
                <FlexContainer $width="100%" role="none" >
                    <label htmlFor="description">description</label>
                    <textarea name="description" id="description" cols="50" rows="10"></textarea>
                </FlexContainer>

                <StyledButton type="submit" >Submit</StyledButton>
                <StyledButton>Clear</StyledButton>
            </StyledField>

        </form>
    );
};

export default VideoForm;