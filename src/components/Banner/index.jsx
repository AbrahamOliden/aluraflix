import styled from "styled-components";
import MySlider from "../CarouselComponents/Slider";

const StyledContainer = styled.div`
    position: relative;
    z-index: 0;
    /* 
        div, img {
            width: 50%;
        }
    } */
`;

const StyledSection = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align: left;
    background-color: rgba(0, 18, 51, 0.56);
    z-index: 1;
`;


function Banner() {
  return (
    <StyledContainer >
        <img src="/banner.png" alt="background image" />
        <StyledSection>
            <MySlider />

        </StyledSection>
        <section>
        </section>
    </StyledContainer>
  )
}

export default Banner