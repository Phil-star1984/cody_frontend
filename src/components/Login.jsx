import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log(firstName, lastName, email, password); */

    const logIn = {
      email,
      password,
    };

    try {
      const signIn = await axios.post(
        "https://cody-app.onrender.com/auth/signin",
        logIn
        /* {
          withCredentials: true,
        } */
      );

      if (signIn.status === 201) {
        alert("You are now logged in!");
        navigate("/home");
      }
    } catch (error) {
      console.error(error || "Registration failed");
    }
  };

  /* const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
  } */

  return (
    <Card
      className="flex justify-center items-center h-screen"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you again! Enter your login details.
      </Typography>
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
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
    </Card>
  );
}