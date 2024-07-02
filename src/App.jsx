import GlobalContextProvider from "./context/GlobalContext";
import Banner from "./components/Banner";
import Home from "./components/Home";

function App() {

  return (
        <GlobalContextProvider>
          <Banner id="banner" />
          <Home />
        </GlobalContextProvider>
  );
};

export default App;