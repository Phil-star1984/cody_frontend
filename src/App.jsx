import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
