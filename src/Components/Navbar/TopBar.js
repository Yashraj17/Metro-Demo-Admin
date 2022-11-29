import React from "react";
import logo from "../../Assest/logo.png";
import search from "../../Assest/Vector (1).png";
import "../Style/Style.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const TopBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  console.log(user);
  const menu = (
    <>
      {user ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex="0"
            className="btn btn-ghost bg-gray-500 btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <h3 className="text-center text-lg text-white flex justify-center items-center h-full">
                  {user?.email?.slice(0, 2)}
                </h3>
              )}
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black text-lg bg-gray-200 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard/profile" className="justify-between">
                Profile
              </Link>
            </li>

            <li>
              <button className="hover:underline" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div class="navbar bg-base-100 border-b-2 border-gray-100 shadow-sm h-16 px-12 ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link to="/dashboard" class="normal-case text-xl">
          <img className="img-fluid" src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <div class="form-control relative mt-0">
          <input
            type="text"
            placeholder="Search here...."
            class="input input-bordered w-96 z-20"
          />

          <button
            class="btn bg-white border-none hover:bg-white absolute top-0 right-2
           rounded-l-none "
          >
            <img className="w-4 h-4 z-30" src={search} alt="" />
          </button>
        </div>
      </div>
      <div class="navbar-end">
        <button class="px-14">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {menu}
      </div>
    </div>
  );
};

export default TopBar;
