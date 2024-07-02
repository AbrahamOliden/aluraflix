import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Carousel from "../CarouselComponents/Carousel";

function Home() {
    const { categories } = useContext(GlobalContext);

    return (


        <main id="home">
            {
                categories.map(category => (
                    <Carousel key={category.title} {...category} />
                ))
            }
        </main>

    );
};

export default Home;