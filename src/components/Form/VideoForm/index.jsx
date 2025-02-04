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
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

function VideoForm() {

    const {newVideo, addVideo } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();
        const id = uuidv4();
        addVideo({...newVideo, id});
    };

    return (
        <form onSubmit={handleSubmit}>
            <StyledField>
                <h2>New Video</h2>
                <p>Fill the form to create a new video card</p>

                <label for="title">Title
                    <input type="text" name="title"  id="title" />
                </label>

                <label for="category">Category
                    <input type="select" name="category" id="category"/>
                </label>

                <label for="image">Image
                    <input type="url" name="image" id="image"/>
                </label>

                <label for="video-source">Video
                    <input type="url" name="video-source" id="video-source"/>
                </label>

                <label for="description">Description
                    <textarea name="description" id="video-source" cols="30" rows="10"></textarea>
                </label>
               
            </StyledField>
        </form>
    )
};

export default VideoForm;