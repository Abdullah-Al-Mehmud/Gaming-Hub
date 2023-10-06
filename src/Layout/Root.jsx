import { Outlet } from "react-router-dom";

import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
