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

    const videoFormInputs = [
        {
            title: "title",
            type: "text",
            required: true,
            id: 0
        },
        {
            title: "category",
            type: "select",
            required: true,
            id: 1
        },
        {
            title: "image",
            type: "text",
            required: true,
            id: 2
        },
        {
            title: "video",
            type: "text",
            required: true,
            id: 3
        },
        {
            title: "description",
            type: "textarea",
            required: false,
            id: 4,
            width: "100%"
        }
    ];
    const categoryFormInputs = [
        {
            title: "name",
            type: "text",
            required: true,
            id: 0,
            width: "100%"
        },
        {
            title: "color",
            type: "color",
            required: true,
            id: 1,
            width: "100%"
        },
        {
            title: "description",
            type: "textarea",
            required: false,
            id: 2,
            width: "100%"
        }
    ];

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