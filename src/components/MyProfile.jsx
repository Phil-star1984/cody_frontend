import React, { useContext } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function MyProfile() {
  const { user, setUser, isLoggedIn, setIsLoggedIn, isLoading, setIsLoading } =
    useAuth();

  return (
    <div className="h-screen flex items-center justify-center bg-blue-500">
      <Card className="bg-white rounded-md text-center p-5">
        <h1 className="text-2xl">
          Profile {user.firstName} {user.lastName}
        </h1>
        <div className="mt-20 grid gap-2 text-left">
          <p className="bg-gray-300 p-1 rounded-md">
            First Name: {user.firstName}
          </p>
          <p className="bg-gray-300 p-1 rounded-md">
            Last Name: {user.lastName}
          </p>
          <p className="bg-gray-300 p-1 rounded-md">Email: {user.email}</p>
          <p className="bg-gray-300 p-1 rounded-md">
            Creation Date: {user.creationDate}
          </p>
          <p className="bg-gray-300 p-1 rounded-md">User ID: {user._id}</p>
        </div>
      </Card>
    </div>
  );
}

export default MyProfile;
