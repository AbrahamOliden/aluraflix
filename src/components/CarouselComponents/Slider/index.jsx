import Slider from "react-slick";

function MySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} >

        </Slider>
    )
}

export default MySlider