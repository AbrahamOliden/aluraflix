import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCardSlider from "../VideoCard";
import data from "../slider-data.json";

function MySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container" style={{ maxWidth: "100%" }} >
            <Slider {...settings} >
                {
                    data.videos.map(video => <VideoCardSlider key={video.id} {...video} />)
                }
            </Slider>
        </div>
    );
};

export default MySlider;