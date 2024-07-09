import styled from "styled-components";
import MySlider from "../Slider";

const StyledContainer = styled.section`
     display: flex;
     flex-flow: column nowrap;
     justify-content: flex-start;
     padding: 40px;
     gap: 40px;
`;

const StyledHeading = styled.h4`
    min-width: fit-content;
    width: 350px;
    margin: 40px auto 0 40px;
    background-color: ${props => props.$color};
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    border: none;
    border-radius: 15px;
`;

function Carousel({ title, color, videos }) {

    return (
        <StyledContainer >
            <StyledHeading $color={color} >{title}</StyledHeading>
            <MySlider color={color} videos={videos} />
        </StyledContainer>
    )
};

export default Carousel;