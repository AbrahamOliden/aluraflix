import styled from "styled-components";
import MySlider from "../Slider";

const StyledContainer = styled.section`
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

function Carousel(props) {

    const { title, color, videos } = props

    return (

        videos.map(category => ( //? change to {}
                <StyledContainer key={title}>
                    <StyledButton $color={color} >{title}</StyledButton>
                    <MySlider {...category} color={color} />
                </StyledContainer>
            )
        ))
};

export default Carousel;