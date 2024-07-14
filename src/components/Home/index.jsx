import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Carousel from "../CarouselComponents/Carousel";
import Banner from "../Banner";

function Home() {
    const { state } = useContext(GlobalContext);

    return (
        <>
            <Banner />
            <main id="home">
                {
                    state.map(category => (
                        <Carousel key={category.id} {...category} />
                    ))
                }
            </main>
        </>

    );
};

export default Home;