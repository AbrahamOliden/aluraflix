import VideosContainer from "../VideosContainer"

function Home() {
    return (
        <main id="home">
            <VideosContainer text={"Front End"} color={"#6BD1FF"} />
            <VideosContainer text={"Back End"} color={"#00C86F"} />
            <VideosContainer text={"Innovacion & Gestion"} color={"#FFBA05"} />
        </main>
    );
};

export default Home;