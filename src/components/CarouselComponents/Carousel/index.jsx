import styled from "styled-components";
import VideoCard from "../VideoCard";

const StyledCarousel = styled.section`
     display: flex;
     flex-flow: column nowrap;
     justify-content: flex-start;
     padding: 40px;
     gap: 40px;
`;

const StyledButton = styled.button`
    min-width: fit-content;
    width: 350px;
    background-color: ${props => props.$color};
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
`;

const StyledList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 40px;
    list-style: none;
    overflow-x: scroll;
    scrollbar-color: var(--blue) var(--black);
    scrollbar-width: 12px;
`;

function Carousel({ text, color }) {
    return (
        <StyledCarousel >
            <StyledButton $color={color} >{text}</StyledButton>
            <StyledList>
                <VideoCard color={color} />
                <VideoCard color={color} />
                <VideoCard color={color} />
                <VideoCard color={color} />
                <VideoCard color={color} />
                <VideoCard color={color} />
            </StyledList>
        </StyledCarousel>
    )
}

export default Carousel