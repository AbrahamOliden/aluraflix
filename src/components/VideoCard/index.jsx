import styled from "styled-components";

const StyledFigure = styled.figure`
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 0;
    width: 25vw;
    margin-bottom: 20px;
`;

const StyledImage = styled.img`
    width: 100%;
    border: 3px solid ${props => props.$color};
    border-radius: 15px 15px 0 0;
    box-sizing: border-box;
`;

const StyledCaption = styled.figcaption`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 16px;
    background-color: var(--black);
    border: 3px solid ${props => props.$color};
    border-radius: 0 0 15px 15px;
    button {
        font-size: 1rem;
        font-weight: 400;
        background-color: transparent;
        color: inherit;
        border: none;
        img {
            width: 1rem;
            margin-right: 1rem;
            border: none;
        }
    }
`;

function VideoCard({ color }) {
  return (
    <li>
        <StyledFigure>
            <StyledImage src="/miniature01.jpg" alt="Video title" $color={color} />
            <StyledCaption $color={color}>
                <button>
                    <img src="/trash.png" alt="trash icon" />
                    Delete
                </button>
                <button>
                    <img src="/edit.png" alt="edit icon" />
                    Edit
                </button>
            </StyledCaption>
        </StyledFigure>
    </li>
  );
};

export default VideoCard;