import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoCardSlider from "../VideoCard";

function MySlider({ videos, color }) {

    // const { videos, color } = props;
    // console.log(videos);
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

    return (
        <div className="slider-container" style={{ maxWidth: "100%" }} >
            <Slider {...settings} >
                {
                    videos.map(video => {
                        return <VideoCardSlider key={video.id} color={color} {...video} />
                    })
                }
            </Slider>
        </div>
    );
};

export default MySlider;