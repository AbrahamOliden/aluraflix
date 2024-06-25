// import './App.css'
import GlobalStyles from "./GlobalStyles";
import DefaultPage from "./components/DefaultPage";
import Banner from "./components/Banner";
import Home from "./components/Home";

function App() {

  return (
    <GlobalStyles id="global-styles" >
        <DefaultPage>
          <Banner />
          <Home />
        </DefaultPage>
    </GlobalStyles>
  );
};

export default App;