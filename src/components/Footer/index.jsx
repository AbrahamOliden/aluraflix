import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

function Footer() {
  return (
    <StyledFooter>
        <img src="aluraflix-logo.svg" alt="Aluraflix Logo" />
    </StyledFooter>
  );
};

export default Footer;