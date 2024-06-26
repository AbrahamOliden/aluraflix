import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles from "../../GlobalStyles";

function DefaultPage({ children }) {
  return (
    <GlobalStyles id="global-styles" >
        <Header />
        {children}
        <Footer />
    </GlobalStyles>
  );
};

export default DefaultPage;