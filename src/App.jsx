import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chat from "./components/Chat.jsx";
import NavBar from "./components/NavBar.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import MyProfile from "./components/MyProfile.jsx";
import { useAuth } from "./context/AuthProvider.jsx";
/* import { ToastContainer } from "react-toastify"; */
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<SignUp />} />

        {isLoggedIn ? (
          <Route path="/myprofile" element={<MyProfile />} />
        ) : (
          <Route path="/myprofile" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
