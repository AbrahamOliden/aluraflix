import styled from "styled-components";
import { StyledButton } from "../Button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
    z-index: 1;
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

    const location = useLocation().pathname;

    return (
        <StyledHeader id="header" >
            <h1>
                <Link to="/" >
                    <img src="/aluraflix-logo.svg" alt="Aluraflix logo" />
                </Link>
            </h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <StyledButton $active={location === "/"} >Home</StyledButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-video" >
                            <StyledButton $active={location === "/new-video"} >New video</StyledButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header