import React from "react";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <>
      <div className="bg-gray-500 h-16 p-4 flex align-center justify-between text-white fixed top-0 w-full shadow-xl">
        <div className="w-52 text-3xl font-extrabold">
          <h2>CODY.AI</h2>
        </div>
        <div className="justify-between w-96 mt-1 hidden md:visible md:flex">
          <h2>Chat with Cody</h2>
          <h2>About</h2>
          <h2>Support</h2>
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
