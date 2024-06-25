import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

function VideoForm() {
    return (
        <StyledForm>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="Title or smth" />

            <label htmlFor="category">Category</label>
            <input type="text" name="category" placeholder="category" />

            <label htmlFor="image">Image</label>
            <input type="text" name="image" placeholder="image " />

            <label htmlFor="source">source</label>
            <input type="text" name="source" placeholder="source" />
        </StyledForm>
    );
};

export default VideoForm;