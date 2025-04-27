import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../../context/GlobalContext";
import styled from "styled-components";
import { ButtonContainer, StyledButton } from "../../Button";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
    `;

/*&>div {
    width: 350px;
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
}*/

const StyledLabel = styled.label`
    margin: 0 ;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
    text-align: left;
`;

const StyledInput = styled.input` //? All these styles might be combined
    display: block;
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 16px;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

const StyledDropdown = styled.select` //? and then extend in styled components
    display: block;
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 16px;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

const StyledTextArea = styled.textarea` //? this 1 2
    display: block;
    width: 50%;
    min-width: 350px;
    height: 180px;
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 16px;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

function VideoForm() {

    const { newVideo, addVideo, state } = useContext(GlobalContext);

    const handleSubmit= e => {
        e.preventDefault();
        const id = uuidv4();
        addVideo({...newVideo, id})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>New Video</h2>
            <p>Fill the form to create a new video card</p>

            <StyledField>
                <div role="none">
                    <StyledLabel htmlFor="title">Title
                        <StyledInput type="text" name="title" id="title" placeholder="Video title" />
                    </StyledLabel>
                </div>

                <div role="none">
                    <StyledLabel htmlFor="category">Category
                        <StyledDropdown >
                            <option value="">Choose a category</option>
                            {
                                /*<StyledInput type="select" name="category" id="category" placeholder="Video category"/>*/
                                state.map(category => (
                                    <option key={category.id} value={category.title}> {category.title} </option>
                                ))
                            }
                        </StyledDropdown>
                    </StyledLabel>
                </div>

                <div role="none">
                    <StyledLabel htmlFor="thumbnail">thumbnail
                        <StyledInput type="url" name="thumbnail" id="thumbnail" placeholder="Link to video thumbnail" />
                    </StyledLabel>
                </div>

                <div role="none">
                    <StyledLabel htmlFor="video-source">Video
                        <StyledInput type="url" name="video-source" id="video-source" placeholder="link to video" />
                    </StyledLabel>
                </div>

                <div role="none">
                    <StyledLabel htmlFor="description">Description
                        <StyledTextArea name="description" id="video-source" cols="30" rows="10" placeholder="Add a brief description"></StyledTextArea>
                    </StyledLabel>
                </div>

                <ButtonContainer>

                    <div>

                        <StyledButton type="submit">submit</StyledButton>
                        <StyledButton type="reset">reset</StyledButton>
                    </div>

                    <StyledButton>new category</StyledButton>
                </ButtonContainer>

            </StyledField>
        </form >
    )
};

export default VideoForm;