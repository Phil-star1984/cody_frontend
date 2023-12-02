import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid grid-cols-1 gap-80 place-items-center mx-auto h-screen bg-[url('../src/assets/cody_home.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="fixed top-20 col-span-1">
        <h1 className="text-9xl font-bold text-white drop-shadow-[0_20px_20px_rgba(0,0,0,1)]">
          CODY
        </h1>
      </div>
      <div className="fixed bottom-0 w-full pb-14 pt-40 col-span-1 grid gap-2 place-items-center bg-gradient-to-t from-blue-900 to-transparent">
        <div>
          <h1 className="bg-white rounded-3xl py-0.5 px-8 border-2 border-black drop-shadow-2xl text-xl text-center w-fit font-bold">
            Fun learning with AI!
          </h1>
        </div>
        <div>
          <h1 className="rounded-3xl py-1 px-4 drop-shadow-2xl text-xl text-center text-white font-bold">
            Interactive AI tutorials for kids.
            <br />
            Learn with Cody.
          </h1>
        </div>
        <div>
          <Link
            to="/signup"
            className="text-xl text-center bg-white rounded-3xl py-0.5 px-7 border-2 border-black drop-shadow-2xl font-bold"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
