import Banner from "../Banner";
import Carousel from "../CarouselComponents/Carousel";

function Home() {
    return (
        <main>
            <Banner />
            <Carousel text={"Front End"} color={"#6BD1FF"} />
            <Carousel text={"Back End"} color={"#00C86F"} />
            <Carousel text={"Innovacion & Gestion"} color={"#FFBA05"} />
        </main>
    );
};

export default Home;