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

const StyledFigure = styled.figure`
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-evenly;
    width: 100%;
    &>img {
        flex: 1;
        flex-shrink: 2;
    };
`;

const StyledCaption = styled.figcaption`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    &>#category-banner {
        font-size: 2.5rem;
        margin: 0;
    };
    &>#category-description {
        font-size: 1.2rem;
        margin: 0;
    }
`;

const StyledHeading = styled.h2`
    width: fit-content;
    margin: 0 auto 0 0;
    background-color: #6BD1FF;
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 20px 60px;
    border: none;
    border-radius: 15px;
`;


function Banner() {
    return (
        <StyledContainer >
            <img src="/banner.png" alt="background image" />
            <StyledSection>
                <StyledFigure id="styled-figure" >
                    <img src="/test-image-video.png" alt="video miniature" />
                    <StyledCaption>
                        <StyledHeading >Front end</StyledHeading>
                        <h3 id="category-banner" >Challenge React</h3>
                        <p id="category-description" >Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </StyledCaption>
                </StyledFigure>

            </StyledSection>
        </StyledContainer>
    );
};

export default Banner;