import GlobalContextProvider from "./context/GlobalContext";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewVideo from "./components/Registry/NewVideo";
import NewCategory from "./components/Registry/NewCategory";
import GlobalStyles from "./GlobalStyles";
// import NotFound from "./routes/not-found";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles>
        <Header />
        <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="new-video" element={<NewVideo />} />
            <Route path="new-category" element={<NewCategory />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </GlobalContextProvider>
        <Footer />
      </GlobalStyles>
    </BrowserRouter>
  );
};

export default App;