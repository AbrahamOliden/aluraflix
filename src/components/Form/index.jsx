import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CategoryForm from "./CategoryForm";
import VideoForm from "./VideoForm";

const StyledField = styled.fieldset`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 60px 30px;
    border: none;
`;

function Form() {

    const location = useLocation();

    const videoFormInputs = [];
    const categoryFormInputs = [];

    return (
        <form>
            <StyledField>
                {
                    location === "new-video"
                        ? <VideoForm />
                        : location === "new-category"
                            ? <CategoryForm />
                            : null
                }
            </StyledField>
        </form>
    )
}

export default Form