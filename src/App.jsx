// import './App.css'
import GlobalStyles from "./GlobalStyles";
import Banner from "./components/Banner";
import Carousel from "./components/CarouselComponents/Carousel";
import DefaultPage from "./components/DefaultPage";

function App() {

  return (
    <GlobalStyles id="global-styles" >
        <DefaultPage>
          <Banner />
          <Carousel text={"Front End"} color={"#6BD1FF"} />
          <Carousel text={"Back End"} color={"#00C86F"} />
          <Carousel text={"Innovacion & Gestion"} color={"#FFBA05"} />
        </DefaultPage>
    </GlobalStyles>
  );
};

export default App;