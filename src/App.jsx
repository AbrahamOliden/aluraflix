// import './App.css'
import GlobalStyles from "./GlobalStyles";
import Banner from "./components/Banner";
import DefaultPage from "./components/DefaultPage";

function App() {

  return (
    <GlobalStyles id="global-styles" >
        <DefaultPage>
          <Banner />
        </DefaultPage>
    </GlobalStyles>
  );
};

export default App;