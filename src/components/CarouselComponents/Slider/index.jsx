import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCardSlider from "../VideoCard";
import styled from "styled-components";
import data from "../slider-data.json";

const StyledList = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 40px;
    list-style: none;
`;

function MySlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = Object.values(props).filter(item => typeof (item) === "object");

    return (
        <div className="slider-container" style={{ maxWidth: "100%" }} >
            <Slider {...settings} >
                {
                    data.map(video => {
                        return <VideoCardSlider key={video.id} color={props.color} {...video} />
                    })
                }
            </Slider>
        </div>
    );
};

export default MySlider;