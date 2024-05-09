import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../Router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="">
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
