import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
