import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[url('../../../public/images/bg.svg')] h-screen bg-cover bg-no-repeat bg-top">
      <div className="bg-black bg-opacity-60 h-screen">
        <div className="flex justify-evenly gap-56 items-center pt-10">
          {/* logo */}
          <div className="">
            <img
              className="w-14"
              src="../../../public/images/arcade.png"
              alt=""
            />
          </div>
          {/* links */}
          <div className="text-lg font-bold ">
            <ul className="flex gap-10 text-white">{links}</ul>
          </div>
          {/* login */}
          <div>
            <button className="btn">LogIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
