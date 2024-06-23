// import './App.css'
import GlobalStyles from "./GlobalStyles";
import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {

  return (
    <GlobalStyles id="global-styles" >
        <Header />
        <Banner />
    </GlobalStyles>
  );
};

export default App;