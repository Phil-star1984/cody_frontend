import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import axios from "axios";
import { toast } from "react-toastify";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = async () => {
    try {
      const response = await axios.get(
        "https://cody-app.onrender.com/auth/me",
        {
          withCredentials: true,
        }
      );

      if (response.data && response.data._id) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const logOut = async () => {
    try {
      await axios.post(
        "https://cody-app.onrender.com/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <div className="bg-gray-500 h-16 p-4 flex align-center justify-between text-white fixed top-0 w-full shadow-xl z-10">
        <div className="w-52 text-3xl font-extrabold">
          <Link to="/">
            <h2>CODY.AI</h2>
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
        <div className="justify-between mt-1 hidden md:visible md:flex">
          {isLoggedIn ? (
            <div>
              <Link to="/" className="mx-3">
                Extra Function
              </Link>
              <button onClick={logOut}>Logout</button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <div className="">
          <SocialIcon
            fgColor="currentColor"
            bgColor="black"
            className="mx-1 text-white hover:blue-500 bg-transparent"
            url="https://www.facebook.com/philsplash/"
            style={{ width: "35px", height: "35px" }}
          />
          <SocialIcon
            fgColor="currentColor"
            bgColor="black"
            className="mx-1 text-white hover:blue-500 bg-transparent"
            url="https://www.instagram.com/the_million_painter/"
            style={{ width: "35px", height: "35px" }}
          />
          <SocialIcon
            fgColor="currentColor"
            bgColor="black"
            className="mx-1 mr-0 text-white hover:blue-500 bg-transparent"
            url="https://www.linkedin.com/in/philipp-mulfinger-941498b1/"
            style={{ width: "35px", height: "35px" }}
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
