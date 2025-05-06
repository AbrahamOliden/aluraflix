import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledLabel = styled.label`
    margin: 0 ;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
    text-align: left;
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

function TextInput({ placeholder, inputID, type }) {

    const location = useLocation();

    const { state, newVideo, setNewVideo, newCategory, setNewCategory } = useContext(GlobalContext);
    
    const handleChange = e => {

        const { name, value } = e.target;

        if (location === "/new-video") {
            setNewVideo(prevData => ({ ...prevData, [name]: value }))
        } else if (location === "/new-category") {
            setNewCategory(prevData => ({ ...prevData, [name]: value }))
        };
    };

    return (
        <div role="none">
            <StyledLabel htmlFor={inputID}>{inputID}
                <StyledInput onChange={() => handleChange} type={type} name={inputID} id={inputID} placeholder={placeholder} />
            </StyledLabel>
        </div>
    );
};

export default TextInput;