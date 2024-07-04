import styled from "styled-components";
import CategoryForm from "../../Form/CategoryForm";
import Form from "../../Form";


const StyledSection = styled.section`
    min-height: fit-content;
    padding: 50px 100px;
    &>h1 {
        text-transform: uppercase;
    }
`

function NewCategory() {
    return (
        <StyledSection>
            <h1>New Category</h1>
            <p>Fill the form to create a new category</p>
            <CategoryForm/>
        </StyledSection>
    );
};

export default NewCategory;