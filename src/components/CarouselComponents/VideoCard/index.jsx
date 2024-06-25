import styled from "styled-components";

const StyledElement = styled.li`
    figure {
        margin: 0;
        display: flex;
        flex-flow: column nowrap;
        gap: 0;
        width: 25vw;
        margin-bottom: 20px;
    }
    img {
        width: 100%;
        border: 3px solid ${props => props.$color};
        border-radius: 15px 15px 0 0;
        box-sizing: border-box;
    }
    figcaption {
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
    }
`;

function VideoCard({ color }) {
  return (
    <StyledElement $color={color} >
        <figure>
            <img src="/miniature01.jpg" alt="Video title" />
            <figcaption>
                <button>
                    <img src="/trash.png" alt="trash icon" />
                    Delete
                </button>
                <button>
                    <img src="/edit.png" alt="edit icon" />
                    Edit
                </button>
            </figcaption>
        </figure>
    </StyledElement>
  )
}

export default VideoCard