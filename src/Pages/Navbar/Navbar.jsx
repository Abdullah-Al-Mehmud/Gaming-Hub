import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff007f] underline" : ""
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/news"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff007f] underline" : ""
          }>
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff007f] underline" : ""
          }>
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-evenly gap-56 items-center pt-10">
      {/* logo */}
      <div className="">
        <img className="w-14" src="../../../public/images/arcade.png" alt="" />
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
  );
};

export default Navbar;
