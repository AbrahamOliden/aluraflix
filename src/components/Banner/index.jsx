import styled from "styled-components";

const StyledContainer = styled.div`
    position: relative;
    &>section{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 32px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: left;
        background-color: rgba(0, 18, 51, 0.56);
        padding: 0 40px;
        div, img {
            width: 50%;
        }
        div > button {
            min-width: 420px;
            background-color: #6BD1FF;
            color: var(--white);
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            padding: 20px;
            border: none;
            border-radius: 15px;
            cursor: pointer;
        }
        div > h1 {
            font-size: 2.9rem;
            font-weight: 400;
        }
        div > p {
            font-size: 1.2rem;
            font-weight: 300;
        }
    }
`;


function Banner() {
  return (
    <StyledContainer >
        <img src="/banner.png" alt="background image" />
        <section>
            <div>
                <button>Front End</button>
                <h1>Challenge React</h1>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <img src="/test-image-video.png" alt="bidio" />
        </section>
    </StyledContainer>
  )
}

export default Banner