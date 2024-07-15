import styled from "styled-components";

const StyledFigure = styled.figure`
    display: flex;
    flex-flow: column nowrap;
    gap: 0;
    &>div {
        box-shadow: inset 0 0 20px 5px ${props => props.$color};
        border-radius: 15px 15px 0 0;
    }
`;

const StyledImage = styled.img`
    position: relative;
    width: 100%;
    border: 3px solid ${props => props.$color};
    border-radius: 15px 15px 0 0;
    box-sizing: border-box;
    z-index: -1;
`;

const StyledCaption = styled.figcaption`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--black);
    padding: 3px;
    border: 3px solid ${props => props.$color};
    border-radius: 0 0 15px 15px;
    box-sizing: border-box;
    button {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        background-color: transparent;
        color: inherit;
        border: none;
        padding: 16px;
        cursor: pointer;
        &:hover {
            background-color: var(--blue);
        }
        img {
            width: 1rem;
            border: none;
        }
    }
`;

function VideoCardSlider(props) {

    return (
        <StyledFigure $color={props.color}>
            <div role="none" >
                <StyledImage src={props.image} alt={props.title} />
            </div>
            <StyledCaption $color={props.color} >
                <button>
                    <img src="/edit.png" alt="Edit icon" />
                    Edit
                </button>
                <button>
                    <img src="/trash.png" alt="Delete icon" />
                    Delete
                </button>
            </StyledCaption>
        </StyledFigure>
    )
}

export default VideoCardSlider