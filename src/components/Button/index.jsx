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
    background-color: inherit;
    color: ${props => props.$active 
        ? "var(--blue)" : "var(--white)"} ;
    cursor: pointer;
`;