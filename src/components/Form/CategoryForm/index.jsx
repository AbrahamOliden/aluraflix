import styled from "styled-components";
import Input from "../../InputField";
import StyledButton from "../../Button";

const StyledField = styled.fieldset`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: center;
gap: 60px 30px;
border: none;
`;

// const StyledContainer = styled.div`
//     width: ${props => props.$width ? `${props.$width}` : "350px"};
//     display: flex;
//     flex-flow: column nowrap;
//     text-align: left;
//     &>textarea {
//         width: 50%;
//         min-width: 350px;
//     }
// `;

function CategoryForm() {
    return (
        <form>
            <StyledField>
                <Input inputsArray={[
                    {
                        title: "name",
                        type: "text",
                        required: "true",
                        id: 0
                    },
                    {
                        title: "color",
                        type: "color",
                        required: "true",
                        id: 1
                    },
                    {
                        title: "title",
                        type: "textarea",
                        required: "false",
                        id: 2
                    }
                ]} />
                <StyledButton type="submit">Submit</StyledButton>
                <StyledButton>Clear</StyledButton>
            </StyledField>
        </form>
    );
};

export default CategoryForm;