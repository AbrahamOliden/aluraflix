import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import MySlider from "../Slider";
import EditForm from "../../Form/EditForm";
import styled from "styled-components";
import { videoFormInputs } from "../../Form";

const StyledContainer = styled.section`
     display: flex;
     flex-flow: column nowrap;
     justify-content: flex-start;
     padding: 40px;
     gap: 40px;
     &>.empty-videos-description {
        font-size: 1.8rem;
        font-weight: 600;
     }
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

function Carousel({ title, color, videos, id }) {

    const { isDialogOpen } = useContext(GlobalContext);

    if (videos.length > 0) {
        return (
            <>
                <StyledContainer >
                    <StyledHeading $color={color} >{title}</StyledHeading>
                    <MySlider color={color} videos={videos} category={title} categoryId={id} />
                </StyledContainer>
                {
                    isDialogOpen && (
                        <EditForm
                            arrayOfInputs={videoFormInputs}
                            widthOfInputs={"100%"}
                            location={"/new-video"}
                        />
                    )
                }
            </>
        )
    } else {
        return (
            <StyledContainer >
                <StyledHeading $color={color} >{title}</StyledHeading>
                <p className="empty-videos-description">There aren't any videos in this category yet</p>
            </StyledContainer>
        )
    };
};

export default Carousel;