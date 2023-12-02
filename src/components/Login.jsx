import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log(firstName, lastName, email, password); */

    const logIn = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://cody-app.onrender.com/auth/signin",
        logIn,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        /* alert("You are now logged in!"); */
        toast.success("You are now logged in. Welcome!");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      setError(error.response.data.error);
      /* console.log(error); */
      console.log(error.response.data);
      /* console.error(error || "Registration failed"); */
      toast.error(error.response.data.error || "Invalid credentials");
    }
  };

  /* const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
  } */

  return (
    <div className="flex items-center justify-center h-screen bg-[url('../src/assets/cody_home.jpg')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <Card className="bg-white p-8" color="transparent" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your login details.
        </Typography>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link
                  to="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" type="submit" fullWidth>
            login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Need to register first?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Signup
            </Link>
          </Typography>
        </form>
        <ToastContainer />
      </Card>
    </div>
  );
}
