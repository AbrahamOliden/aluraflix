import { useContext } from "react";
//import { useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../../context/GlobalContext";
import styled from "styled-components";
//import { ButtonContainer, StyledButton } from "../Button";
//import Input from "../InputField";
//import Table from "../Table";
//import EditForm from "./EditForm";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px 0;
    border: none;

    &>h2  {
        font-size: 1.8em;
        text-transform: uppercase;
    };
`;

const StyledLabel = styled.label` 
    margin: 0 0 16px 5px;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
    text-align: start;
    align-self: start;

    &:first-of-type  {
       margin-top: 50px;
    };
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

    const {newVideo, addVideo } = useContext(GlobalContext);

    /*const handleSubmit = e => {
        e.preventDefault();
        const id = uuidv4();
        addVideo({...newVideo, id});
    };*/

    return (
        <form>
            <StyledField>
                <h2>New Video</h2>
                <p>Fill the form to create a new video card</p>

                <StyledLabel htmlFor="title">Title
                    <StyledInput type="text" name="title"  id="title" placeholder="Video title"/>
                </StyledLabel>

                <StyledLabel htmlFor="category">Category
                    {/*<StyledInput type="select" name="category" id="category" placeholder="Video category"/>
                    */}
                    <select />
                </StyledLabel>

                <StyledLabel htmlFor="thumbnail">thumbnail
                    <StyledInput type="url" name="thumbnail" id="thumbnail" placeholder="Link to video thumbnail"/>
                </StyledLabel>

                <StyledLabel htmlFor="video-source">Video
                    <StyledInput type="url" name="video-source" id="video-source" placeholder="link to video"/>
                </StyledLabel>

                <StyledLabel htmlFor="description">Description
                    <StyledTextArea name="description" id="video-source" cols="30" rows="10" placeholder="Add a brief description"></StyledTextArea>
                </StyledLabel>
               
            </StyledField>
        </form>
    )
};

export default VideoForm;