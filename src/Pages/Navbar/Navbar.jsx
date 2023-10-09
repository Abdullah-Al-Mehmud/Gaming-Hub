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
          to="/hardware"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff007f] underline" : ""
          }>
          Hardware
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
    <div className="flex px-10 items-center pt-10">
      {/* logo */}
      <img className="w-14 " src="./images/arcade.png" alt="" />
      {/* responsive */}
      <div className="navbar-start ml-5">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
      </div>
      {/* links */}
      <div className="flex items-center lg:gap-52">
        <div className={` navbar-center text-lg font-bold  hidden lg:flex`}>
          <ul className="flex gap-10 text-white">{links}</ul>
        </div>

        {/* login */}
        <div>
          <div className="flex gap-5">
            {user ? (
              <div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar">
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
                      <a>{user?.displayName}</a>
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
      </div>
    </div>
  );
};

export default Navbar;
