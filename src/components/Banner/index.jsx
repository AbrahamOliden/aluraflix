import styled from "styled-components";

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
            <div>
                <button>Front End</button>
                <h1>Challenge React</h1>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <img src="/test-image-video.png" alt="bidio" />

        </StyledSection>
        <section>
        </section>
    </StyledContainer>
  )
}

export default Banner