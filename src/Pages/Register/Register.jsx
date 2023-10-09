import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { BiShowAlt, BiHide } from "react-icons/bi";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateEmailProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate(null);
  const [show, setShow] = useState(false);
  // const [name, setName] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    // setName(name);
    // console.log(email, password);

    if (!/[^a-zA-Z0-9]/.test(password)) {
      setError("Must Contain Special character ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Must Contain Capital Letter ");
      return;
    } else if (password.length < 6) {
      setError("Must be upto 6 characters");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Registration Successful!", "success");
        e.target.reset();
        updateEmailProfile(name)
          .then(() => {
            Swal.fire("Update Successful!", "success");
          })
          .catch();

        navigate("/");
      })
      .catch((error) => setError(error.code));
  };

  return (
    <div className="bg-gray-900">
      <div className="">
        <div className="md:mr-28">
          <Navbar></Navbar>
        </div>

        <div className="md:px-0 px-10">
          <div className="hero min-h-screen ">
            <div className=" flex-shrink-0 w-full max-w-lg rounded-xl my-20 bg-base-100">
              <form onSubmit={handleCreateUser} className="card-body  px-10">
                <h1 className="py-10 text-center text-white font-semibold text-4xl">
                  <span className=" "> Register </span> your account
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="input text-[#ff007f] input-bordered bg-base-200 border-none outline-none text-sm font-bold"
                    required
                    name="text"
                  />
                  <label className="label">
                    <span className="label-text mt-4 text-white font-bold">
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
                      <BiShowAlt className="absolute mt-[53px] md:ml-96 ml-72"></BiShowAlt>
                    ) : (
                      <BiHide className="absolute mt-[53px] md:ml-96 ml-72"></BiHide>
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
                  <button className="btn bg-[#ff007f] text-white">
                    Register
                  </button>
                </div>
                <div className="mt-4">
                  {error ? (
                    <p className="font-bold text-red-500">{error}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="text-center mt-4">
                  <p className="font-bold text-white">
                    Have an account ?{" "}
                    <Link to="/login" className=" text-[#ff007f] ">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
