import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Carousel from "../CarouselComponents/Carousel";
import Banner from "../Banner";

function Home() {
    const { categories } = useContext(GlobalContext);

    return (
        <>
            <Banner />
            <main id="home">
                {
                    categories.map(category => (
                        <Carousel key={category.title} {...category} />
                    ))
                }
            </main>
        </>

    );
};

export default Home;