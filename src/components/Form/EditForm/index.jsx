import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import styled from "styled-components";
import Input from "../../InputField";
import { StyledButton, ButtonContainer } from "../../Button";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const StyledForm = styled.form`
    position: relative;
    background-color: var(--dark-gray);
    border: 3px solid var(--blue);
    overflow: scroll;
    max-height: 90vh;
    & > fieldset {
        border: none;
        padding: 50px;
    }
`;

const ButtonContainerEdit = styled(ButtonContainer)`
    justify-content: space-around;
    padding-bottom: 80px;
`;

function EditForm({ arrayOfInputs, widthOfInputs, location }) {

    const elementToEdit = location === "/new-video" ? "video" : "category";

    const { updateCategory, updateVideo, newCategory, newVideo, setIsDialogOpen } = useContext(GlobalContext);

    const handleSubmit = e => {
        e.preventDefault();

        switch (location) {
            case ("/new-video"):
                updateVideo({ ...newVideo });
                setIsDialogOpen(false);
                break;
            case ("/new-category"):
                updateCategory({ ...newCategory });
                setIsDialogOpen(false);
                break;
        }
    }

    return (
        <Overlay>
            <StyledForm onSubmit={handleSubmit} >
                <fieldset>
                    <h2>Edit {elementToEdit} </h2>
                    <p>complete the form to edit this {elementToEdit}</p>

                    <Input arrayOfInputs={arrayOfInputs} widthOfInputs={widthOfInputs} location={location} />
                </fieldset>
                <ButtonContainerEdit>
                    <StyledButton type="submit">Submit</StyledButton>
                    <StyledButton type="button" onClick={() => setIsDialogOpen(false)} >Close</StyledButton>
                </ButtonContainerEdit>
            </StyledForm>
        </Overlay>
    );
};

export default EditForm;