import styled from "styled-components";

const StyledContainer = styled.div`
    position: relative;
    &>section{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 18, 51, 0.56);
    }
`;


function Banner() {
  return (
    <StyledContainer >
        <img src="/banner.png" alt="background image" />
        <section></section>
    </StyledContainer>
  )
}

export default Banner