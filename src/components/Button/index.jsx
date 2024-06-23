import styled from "styled-components";

const StyledButton = styled.button`
    min-width: 150px;
    padding: 15px 0;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border: ${props => props.$active 
        ? "2px solid var(--blue)" : "2px solid var(--white)"} ;
    border-radius: 10px;
    background-color: inherit;
    color: ${props => props.$active 
        ? "var(--blue)" : "inherit"} ;
    cursor: pointer;
`;

export default StyledButton;