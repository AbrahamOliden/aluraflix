import VideoContainer from "../VideosContainer";
import Carousel from "../CarouselComponents/Carousel";
import data from "../CarouselComponents/slider-data.json"

function Home() {
    return (
        <main id="home">
            {
                data.categories.map(category => (
                    <Carousel key={Object.keys(category)[0]} {...category} />
                ))
            }
        </main>
    );
};

export default Home;