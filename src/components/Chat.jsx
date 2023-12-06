import React, { useState, useRef } from "react";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../context/AuthProvider.jsx";

function Chat() {
  const [dialogList, setDialogList] = useState([]);
  const { user } = useAuth();
  const inputRef = useRef();
  const user_name = user.firstName;
  const userId = user._id;

  const handleClick = (e) => {
    e.preventDefault();
    const newRequest = inputRef.current.value;

    axios
      .post("https://cody-app.onrender.com/chat/", {
        user_input: newRequest,
        userId: userId,
        role: "User",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Fügen Sie die neue Anfrage und Antwort zum Dialog hinzu
        setDialogList((dialogList) => [
          ...dialogList,
          {
            request: { content: newRequest, role: user_name },
            answer: { content: response.data, role: "CodyAI" },
          },
        ]);
      })
      .catch((error) => console.log(error));

    inputRef.current.value = "";
  };

  /* console.log(dialogList); */
  return (
    <>
      <div className="bg-[url('../src/assets/cody_chat_01.jpg')] bg-hero bg-no-repeat bg-cover bg-center h-screen">
        {/* <h1 className="text-3xl font-bold text-center mb-5">
        Hi, I am CODY. <br /> What's your question?
      </h1> */}
        <div className="pb-20 md:p-8 lg:p-12 md:pt-28 lg:pt-28 pt-28">
          {dialogList.map((dialog, index) => (
            <div key={index} className="rounded p-4 flow-root">
              <div className="user-message bg-gray-500 text-white p-3 rounded-md w-5/6 float-left shadow-xl">
                <div className="flex items-center justify-start">
                  <AccountCircleIcon sx={{ fontSize: 25 }} className="mr-0.5" />
                  <p className="text-xs">{dialog.request.role}</p>
                </div>
                <div className="text-2xl">{dialog.request.content}</div>
              </div>
              <div className="bot-response text-right mt-2 bg-gray-600 text-white p-3 rounded-md w-5/6 float-right shadow-xl">
                <div className="flex items-center justify-end">
                  <AccountCircleIcon sx={{ fontSize: 25 }} className="mx-0.5" />
                  <p className="text-xs">{dialog.answer.role}</p>
                </div>
                <div className="text-2xl">{dialog.answer.content}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleClick}
          className="fixed bottom-0 p-5 bg-gray-500 w-screen flex justify-center"
        >
          {/* <label className="block mb-2">What is your question</label> */}
          <input
            ref={inputRef}
            placeholder="Your question"
            className="border border-gray-300 rounded-md p-2 w-3/4 mr-3"
          ></input>
          <button
            type="submit"
            className="bg-red-500 text-white rounded-md font-bold px-5"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Chat;
