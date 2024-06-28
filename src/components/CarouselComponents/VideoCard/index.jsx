import styled from "styled-components";

const StyledFigure = styled.figure`
    display: flex;
    flex-flow: row-reverse nowrap;
    &>img {
        flex: 1;
    };
`;

const StyledCaption = styled.figcaption`
    flex: 1;
`;

const StyledButton = styled.button`
    min-width: 420px;
    background-color: ${props => props.$color};
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
`;

function VideoCardSlider({ title, image, description, category }) {

    const buttonColor = {
        "Front-end": "#6BD1FF",
        "Back-end": "#00C86F",
        "Innovation-management": "#FFBA05"
    };

    return (
        <StyledFigure>
            <img src={image} alt={title} />
            <StyledCaption>
                <StyledButton $color={buttonColor[category]} >
                    {category}
                </StyledButton>
                <h2>{title}</h2>
                <p>{description}</p>
            </StyledCaption>
        </StyledFigure>
    )
}

export default VideoCardSlider