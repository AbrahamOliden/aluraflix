import styled from "styled-components";

const StyledElement = styled.li`
    width: 30%;
    height: 300px;
    img {
        width: 100%;
        border: 1px solid ${props => props.$color};
        border-radius: 15px 15px 0 0;
    }
    figcaption {
        display: flex;
        flex-flow: row nowrap;
        background-color: var(--black);
        border: 1px solid ${props => props.$color};
        border-radius: 0 0 15px 15px;
        button {
            font-size: 1rem;
            font-weight: 400;
            background-color: transparent;
            img {
                width: 1rem;
                margin-right: 1rem;
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