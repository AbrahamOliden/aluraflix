import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 36px 0;
    background-color: var(--black);
    img {
        width: 170px;
    }
`

function Footer() {
  return (
    <StyledFooter>
      <Link to="/" >
        <img src="aluraflix-logo.svg" alt="Aluraflix Logo" />
      </Link>
    </StyledFooter>
  );
};

export default Footer;