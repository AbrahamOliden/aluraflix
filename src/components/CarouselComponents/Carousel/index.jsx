import styled from "styled-components";
import VideoCard from "../VideoCard";

const StyledCarousel = styled.section`
     display: flex;
     flex-flow: column nowrap;
     justify-content: flex-start;
     button {
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
     }
     ul {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 30px;
        list-style: none;
     }
`;

function Carousel({ text, color }) {
    return (
        <StyledCarousel $color={color} >
            <button >{text}</button>
            <ul>
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </ul>
        </StyledCarousel>
    )
}

export default Carousel