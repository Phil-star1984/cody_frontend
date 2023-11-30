import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthProvider.jsx";

function NavBar() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();

  /* const checkLogin = async () => {
    try {
      const response = await axios.get(
        "https://cody-app.onrender.com/auth/me",
        {
          withCredentials: true,
        }
      );

      if (response.data && response.data._id) {
        setIsLoggedIn(true);
        setUser(response.data);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  }; */

  const logOut = async () => {
    try {
      await axios.post(
        "https://cody-app.onrender.com/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (logOut.status === 200) {
        /* alert("You are logged out now"); */
        toast.success("You are logged out now");
        navigate("/");
        setIsLoggedIn(false);
      }
      window.location.reload();
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  /*   useEffect(() => {
    checkLogin();
  }, []); */

  return (
    <>
      <div className="bg-gray-500 min-h-16 p-4 flex align-center justify-between text-white fixed top-0 w-full shadow-xl z-10">
        <div className="w-52 text-3xl font-extrabold">
          <Link to="/">
            <h2>{isLoggedIn ? user.firstName : "My"}.AI</h2>
            <ToastContainer />
          </Link>
        </div>
        <div className="justify-between w-72 mt-1 hidden md:visible md:flex">
          <Link to="/chat">
            <h2>Chat with Cody</h2>
          </Link>
          <Link to="/about">
            <h2>About</h2>
          </Link>
        </div>
        <div className="flex">
          {isLoggedIn ? (
            <div className="hidden md:visible md:flex items-center justify-center">
              <Link to="/myprofile">
                <button className="block bg-gray-600 text-white rounded-md px-3 py-1">
                  {user.firstName} Profile
                </button>
              </Link>
              <button
                onClick={logOut}
                className="bg-red-500 text-white rounded-md px-3 py-1 ml-3 mr-1"
              >
                Logout
              </button>
            </div>
          ) : (
            <button className="block bg-gray-600 text-white rounded-md px-3 py-1 mr-1">
              <Link to="/login">Login</Link>
            </button>
          )}

          <div className="">
            <SocialIcon
              target="_blank"
              fgColor="currentColor"
              bgColor="black"
              className="mx-1 text-white hover:blue-500 bg-transparent"
              url="https://www.facebook.com/philsplash/"
              style={{ width: "35px", height: "35px" }}
            />
            <SocialIcon
              target="_blank"
              fgColor="currentColor"
              bgColor="black"
              className="mx-1 text-white hover:blue-500 bg-transparent"
              url="https://www.instagram.com/the_million_painter/"
              style={{ width: "35px", height: "35px" }}
            />
            <SocialIcon
              target="_blank"
              fgColor="currentColor"
              bgColor="black"
              className="mx-1 mr-0 text-white hover:blue-500 bg-transparent"
              url="https://www.linkedin.com/in/philipp-mulfinger-941498b1/"
              style={{ width: "35px", height: "35px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
