import { React, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthProvider.jsx";

function NavBar() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

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

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Fügen Sie den Event Listener hinzu
    document.addEventListener("mousedown", handleClickOutside);

    // Bereinigungsfunktion
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-500 min-h-16 p-4 flex align-center justify-between text-white fixed top-0 w-full shadow-xl z-10">
        <div className="text-3xl font-extrabold">
          <Link to="/">
            <h2>{isLoggedIn ? user.firstName : "My"}.AI</h2>
            <ToastContainer />
          </Link>
        </div>
        <div className="flex">
          <ul className="mt-1 hidden md:visible md:flex">
            <li>
              <Link to="/" className="text-lg mx-2">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/chat" className="text-lg mx-2">
                CHAT
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg mx-2">
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="md:flex hidden">
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
            {isLoggedIn ? (
              <div className="hidden md:visible md:flex items-center justify-center">
                <Link to="/myprofile">
                  <button className="block bg-gray-600 text-white rounded-md px-3 py-1 ml-2">
                    {user.firstName} Profile
                  </button>
                </Link>
                <button
                  onClick={logOut}
                  className="bg-red-500 text-white rounded-md px-3 py-1 ml-2 mr-1"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button className="block bg-gray-600 text-white rounded-md px-3 py-1 ml-2">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden" ref={menuRef}>
          {!isOpen ? (
            <MenuRoundedIcon
              fontSize="large"
              onClick={openMenu}
              className="static"
            />
          ) : (
            <CloseRoundedIcon
              fontSize="large"
              onClick={openMenu}
              className="static"
            />
          )}
          {isOpen && (
            <ul className="bg-gray-600 rounded-md p-6 text-center absolute top-14 right-5 grid gap-3">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/chat">CHAT</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/myprofile">MY PROFILE</Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link to="/" onClick={logOut}>
                    LOGOUT
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
