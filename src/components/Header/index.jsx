import styled from "styled-components";
import { StyledButton } from "../Button";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 36px 50px;
    background-color: var(--black);
    border-bottom: 4px solid var(--blue);
    box-shadow: 0px 25px 29px -29px rgba(34, 113, 209, 0.7);
    img{
        width: 170px;
        scale: 1;
    }
    ul {
        display: flex;
        flex-flow: row nowrap;
        gap: 32px;
        li {
            list-style: none;
        }
    }
`;

function Header() {
    return (
        <StyledHeader id="header" >
            <h1>
                <img src="/aluraflix-logo.svg" alt="Aluraflix logo" />
            </h1>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <StyledButton $active={true} >Home</StyledButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-video" >
                            <StyledButton>New video</StyledButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header