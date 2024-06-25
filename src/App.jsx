// import './App.css'
import GlobalStyles from "./GlobalStyles";
import DefaultPage from "./components/DefaultPage";
import Banner from "./components/Banner";
import Home from "./components/Home";

function App() {

  return (
    <GlobalStyles id="global-styles" >
        <DefaultPage id="default-page" >
          <Banner id="banner" />
          <Home />
        </DefaultPage>
    </GlobalStyles>
  );
};

export default App;