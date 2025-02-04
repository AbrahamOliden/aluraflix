import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalContext";
import styled from "styled-components";
import { ButtonContainer, StyledButton } from "../Button";
import Input from "../InputField";
import Table from "../Table";
import EditForm from "./EditForm";

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
        <>
            <form>
                <StyledField>
                    <h2>New Video</h2>
                    <p>Fill the form to create a new video card</p>

                    <label for="title">
                        <input type="text" name="title" value="title" id="title">Title</input>
                    </label>

                    <label for="category">
                        <input type="select" name="category" value="category" id="category">Category</input>
                    </label>

                    <label for="image">
                        <input type="url" name="image" value="image" id="image">Image</input>
                    </label>

                    <label for="video-source">
                        <input type="url" name="video-source" value="video-source" id="video-source">Video</input>
                    </label>

                    <label for="description">
                        <textarea name="description" value="descriprion" id="video-source" cols="30" rows="10"></textarea>
                    </label>

                    <input type="submit" value="">Submit</input>
                    <input type="reset" value="">Clear</input>
                </StyledField>
            </form>
        </>
    )
};

export default VideoForm;