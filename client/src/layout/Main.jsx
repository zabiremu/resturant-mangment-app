import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Category";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Main;
