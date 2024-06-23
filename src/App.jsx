// import './App.css'
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {

  return (
    <GlobalStyles id="global-styles" >
        <Header />
        <Banner />
        <Footer />
    </GlobalStyles>
  );
};

export default App;