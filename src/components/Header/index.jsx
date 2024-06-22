import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 36px 50px;
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
        <img src="/aluraflix-logo.svg" alt="Aluraflix logo" />
        <nav>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>New video</button>
                </li>
            </ul>
        </nav>
    </StyledHeader>
  )
}

export default Header