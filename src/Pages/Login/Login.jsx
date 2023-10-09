import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { BiShowAlt, BiHide } from "react-icons/bi";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, googleLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login user
    logInUser(email, password)
      .then(() => {
        Swal.fire("LogIn Successful!", "success");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };

  return (
    <div className="bg-gray-900">
      <div className="">
        <Navbar></Navbar>

        <div>
          <div className="hero min-h-screen ">
            <div className=" flex-shrink-0 w-full max-w-lg rounded-xl bg-base-100">
              <form onSubmit={handleLogIn} className="card-body  px-10">
                <h1 className="py-10 text-center text-white font-semibold text-4xl">
                  <span className=" "> Login</span> your account
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Email address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="input text-[#ff007f] input-bordered bg-base-200 border-none outline-none text-sm font-bold"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input text-[#ff007f]  input-bordered bg-base-200 border-none outline-none text-sm font-bold relative"
                    required
                    name="password"
                  />
                  <div onClick={() => setShow(!show)} className="absolute">
                    {show ? (
                      <BiShowAlt className="absolute mt-[53px] ml-96"></BiShowAlt>
                    ) : (
                      <BiHide className="absolute mt-[53px] ml-96"></BiHide>
                    )}
                  </div>
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt mt-4 text-white link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#ff007f] text-white">Login</button>
                </div>
                {error ? (
                  <p className="font-bold mt-4 text-red-500">{error}</p>
                ) : (
                  ""
                )}
                <div className="text-center mt-4">
                  <p className="font-bold text-white">
                    Dont’t Have An Account ?{" "}
                    <Link to="/register" className=" text-[#ff007f] ">
                      Register
                    </Link>
                  </p>
                </div>
                <p className="text-center text-white">Also Login With</p>
                <div className="flex justify-center mt-4">
                  <img
                    onClick={handleGoogleLogIn}
                    src="/images/google.png"
                    className="w-10 cursor-pointer"></img>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
