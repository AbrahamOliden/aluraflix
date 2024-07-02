import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Carousel from "../CarouselComponents/Carousel";

function Home() {
    const { videos } = useContext(GlobalContext);
    console.log(videos);

    return (


        <main id="home">
            {
                videos.map(category => (
                    <Carousel key={Object.keys(category)[0]} {...category} />
                ))
            }
        </main>

    );
};

export default Home;