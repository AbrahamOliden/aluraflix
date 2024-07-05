import styled from "styled-components";

export const ButtonContainer =  styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    gap: 60px 0;
    &>div {
        button {
            margin-right: 20px;
        }
    }
`;

export const StyledButton = styled.button`
    min-width: 150px;
    padding: 15px 0;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    border: ${props => props.$active 
        ? "2px solid var(--blue)" : "2px solid var(--white)"} ;
    border-radius: 10px;
    background-color: transparent;
    color: ${props => props.$active 
        ? "var(--blue)" : "var(--white)"} ;
    cursor: pointer;
    transition: transform 0.5s ease;
    &:hover {
        background-color: rgba(34, 113, 209, 0.7);
        border-color: rgba(34, 113, 209, 0.7);
        color: var(--white);
    }
    &:focus {
        color: var(--blue);
        border-color: var(--blue);
        transform: scale(1.1);
        outline: none;
        box-shadow: 0 0 0 5px rgba(34, 113, 209, 0.7);
    }
    &:active {
        color: var(--black);
        background-color: var(--blue);
    }
`;