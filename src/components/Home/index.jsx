import VideoContainer from "../VideosContainer"

function Home() {
    return (
        <main id="home">
            <VideoContainer text={"Front End"} color={"#6BD1FF"} />
            <VideoContainer text={"Back End"} color={"#00C86F"} />
            <VideoContainer text={"Innovation Management"} color={"#FFBA05"} />
        </main>
    );
};

export default Home;