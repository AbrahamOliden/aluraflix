import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const StyledLabel = styled.label`
    margin: 0 ;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
    text-align: left;
`;

const StyledDropdown = styled.select` //? and then extend in styled components
    background-color: var(--dark-gray);
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 400;
    padding: 16px;
    border: 2px solid var(--blue);
    border-radius: 10px;
`;

function DropdownInput() {

    const {state, newVideo, setNewVideo, newCategory, setNewCategory} = useContext(GlobalContext);

    const location = useLocation();
    const handleChange = e => {
        
    }

};

export default DropdownInput;