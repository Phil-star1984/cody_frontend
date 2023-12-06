import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import { format } from "date-fns";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import API from "../utils/apiBackend.jsx";
import { toast } from "react-toastify";

function MyProfile() {
  const { user, setUser, isLoggedIn, setIsLoggedIn, isLoading, setIsLoading } =
    useAuth();
  /* const [error, setError] = useState(""); */
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/chat/${user._id}`);

        setUserChats(response.data);
      } catch (error) {
        console.error("Fehler beim Abrufen der Chat-Daten:", error);
        // Sie können hier auch einen Toast oder eine andere Form der Benachrichtigung anzeigen
        toast.error("Fehler beim Laden der Chat-Daten.");
      }
    };

    if (user && user._id) {
      fetchData();
    }
  }, [user]);

  return (
    <div className="md:flex md:justify-center py-24 h-screen bg-[url('../src/assets/cody_myprofile_02.jpg')] bg-hero bg-cover bg-center bg-fixed">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 p-5 md:w-3/4">
        <Card className="bg-white col-span-1 rounded-md p-5 mb-5 md:mb-0 min-w-fit">
          <h1 className="text-2xl">
            Profile {user.firstName} {user.lastName}
          </h1>
          <div className="mt-6 md:mt-16 grid gap-2 text-left">
            <p className="bg-gray-300 p-1 rounded-md">
              First Name: {user.firstName}
            </p>
            <p className="bg-gray-300 p-1 rounded-md">
              Last Name: {user.lastName}
            </p>
            <p className="bg-gray-300 p-1 rounded-md">Email: {user.email}</p>
            <p className="bg-gray-300 p-1 rounded-md">
              Registration Date:{" "}
              {user.creationDate
                ? format(new Date(user.creationDate), "MM/dd/yyyy")
                : "Unbekanntes Datum"}
            </p>
            <p className="bg-gray-300 p-1 rounded-md">User ID: {user._id}</p>
          </div>
        </Card>
        <Card className="bg-white md:col-span-2 rounded-md text-center p-5 md:ml-3 min-w-fit">
          <h1 className="text-2xl">Your Chats</h1>
          <div className="mt-6 md:mt-16 grid gap-2 text-left">
            {userChats.map((chat, index) => (
              <div key={index} className="bg-gray-300 p-2 rounded-md">
                <div className="text-xs flex">
                  <p className="w-auto bg-gray-400 px-1 py-0.5 rounded-md">
                    Date: {format(new Date(chat.creationDate), "MM/dd/yyyy")}
                  </p>
                </div>
                <p className="">Your Question: {chat.userInput}</p>
                <p className="">Cody.AI: {chat.chatgptResponse}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default MyProfile;
