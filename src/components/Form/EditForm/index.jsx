import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import styled from "styled-components";
import Input from "../../InputField";

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
    & > fieldset {
        border: none;
        padding: 50px;
    }
`

function EditForm({ arrayOfInputs, widthOfInputs, location }) {

    const { setIsDialogOpen } = useContext(GlobalContext);

    return (
        <Overlay>
            <StyledForm>
                <fieldset>
                    <h2>Hello madafaka</h2>
                    <p>complete the fakiu to fakiu</p>

                    <Input arrayOfInputs={arrayOfInputs} widthOfInputs={widthOfInputs} location={location} />
                </fieldset>
                <button type="button" onClick={() => setIsDialogOpen(false)} >Close</button>
            </StyledForm>
        </Overlay>
    );
};

export default EditForm;