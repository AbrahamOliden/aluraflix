import Header from "../Header";
import Footer from "../Footer";

function DefaultPage({ children }) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
};

export default DefaultPage;