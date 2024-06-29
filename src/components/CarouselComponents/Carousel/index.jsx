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

    const buttonColor = {
        "Front-end": "#6BD1FF",
        "Back-end": "#00C86F",
        "Innovation-management": "#FFBA05"
    };

    const data = (Object.values(props));
    const color = buttonColor[Object.keys(props)]

    return (

        data.map(category => ( //? change to {}
                <StyledContainer key={Object.keys(category)[0]}>
                    <StyledButton $color={color} >{Object.keys(props)[0]}</StyledButton>
                    <MySlider {...category} color={color} />
                </StyledContainer>
            )
        ))
};

export default Carousel;