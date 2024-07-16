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

export const videoFormInputs = [
    {
        title: "title",
        type: "text",
        id: 0
    },
    {
        title: "category",
        type: "select",
        id: 1
    },
    {
        title: "image",
        type: "text",
        id: 2
    },
    {
        title: "video",
        type: "text",
        id: 3
    },
    {
        title: "description",
        type: "textarea",
        id: 4
    }
];

function Form() {

    const { newVideo, newCategory, addCategory, addVideo, isDialogOpen } = useContext(GlobalContext);
    const location = useLocation().pathname;

    const handleSubmit = e => {
        e.preventDefault();
        const id = uuidv4();

        switch (location) {
            case "/new-video":
                addVideo({ ...newVideo, id });
                break;
            case "/new-category":
                addCategory({ ...newCategory, videos: [], id });
                break;
            default:
                return;
        };
    };


    const categoryFormInputs = [
        {
            title: "title",
            type: "text",
            id: 0
        },
        {
            title: "color",
            type: "color",
            id: 1
        },
        {
            title: "description",
            type: "textarea",
            id: 2
        }
    ];

    return (
        <>
            <form onSubmit={handleSubmit} >
                <StyledField>
                    <Input arrayOfInputs={location === "/new-video"
                        ? videoFormInputs
                        : categoryFormInputs}
                        widthOfInputs={location === "/new-category"
                            ? "100%"
                            : null}
                        location={location}
                    />

                    {location === "/new-category" && (
                        <Table />
                    )}
                    <ButtonContainer role="none" id="button-container">
                        <div role="none" >
                            <StyledButton type="submit" >Submit</StyledButton>
                            <StyledButton type="reset" >Clear</StyledButton>
                        </div>


                        {location === "/new-video" && (
                            <Link to="/new-category" >
                                <StyledButton>New Category</StyledButton>
                            </Link>
                        )}

                        {location === "/new-category" && (
                            <Link to="/new-video" >
                                <StyledButton>New Video</StyledButton>
                            </Link>
                        )}
                    </ButtonContainer>
                </StyledField>
            </form>
            {isDialogOpen && (
                <EditForm 
                    arrayOfInputs={categoryFormInputs}
                    widthOfInputs={"100%"}
                    location={location}
                />)
            }
        </>


    )
}

export default Form