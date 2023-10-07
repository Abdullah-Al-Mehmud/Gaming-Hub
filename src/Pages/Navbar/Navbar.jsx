import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser().then().catch();
  };

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
      <div className="flex gap-5">
        {user ? (
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "../../../public/images/user.png"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <Link to="/login">
              <button className="bg-[#ff007f] text-white px-6 py-2 rounded-lg">
                LogIn
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-[#ff007f] text-white px-6 py-2 rounded-lg">
                Registration
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
