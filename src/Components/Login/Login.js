import React from "react";
import metro from "../../Assest/6961783 1.png";
import logo from "../../Assest/logo.png";
import eye from "../../Assest/image-removebg-preview (4) 1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  if (loading) {
    return;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="flex gap-x-16 justify-start items-center">
      <div className="div">
        <img
          style={{ width: "860px", height: "100vh" }}
          className=""
          src={metro}
          alt=""
        />
      </div>
      <div className="">
        <img
          style={{ width: "270px", height: "107px" }}
          className="flex mx-auto"
          src={logo}
          alt=""
        />

        <form
          onSubmit={handleLogin}
          style={{ width: "434px" }}
          className="mx-auto mt-16 pr-16"
        >
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            name="email"
            placeholder="Email Address"
            id=""
          />

          <div class="text-lg mt-4 relative flex justify-between items-center">
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />

            <button
              class="border-none absolute right-2 hover:bg-white
           rounded-l-none z-30"
            >
              <img className="w-6 h-4" src={eye} alt="" />
            </button>
          </div>
          <a className="flex justify-end text-xs mt-2" href="">
            Forgot Password
          </a>
          <input
            className="btn mt-12 border-none text-xs hover:bg-green-700/60 mx-auto flex bg-green-700/70 w-full text-white"
            value="Log In"
            type="submit"
          />
        </form>

        <p className="mt-8">
          Don't have an account?
          <Link to="/signup" className="text-green-600" href="#">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
