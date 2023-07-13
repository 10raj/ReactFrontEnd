import React from "react";
import { useState } from "react";
import { logIn } from "../service/UserService";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../css/login.css";

export default function Login() {
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.info(details);
    logIn(details)
      .then((res) => {
        console.log("Token", res);
        console.log("Succesfull Login");
        toast.success("Succesfull Login");
      })
      .catch((error) => {
        console.log(error);
        console.log("Login Failed");
        toast.error("Login Failed");
      });
  };

  return (
    <div className="login">
    <h2 className="neonText" align="left">Login</h2>
      <ToastContainer />
      <div className="login-box">
        <form>
          <div className="user-box">
            <input
              type="text"
              name="userName"
              placeholder="UserName"
              value={details.userName}
              onChange={handleChange}
              className="form-control"
              id="formGroupExampleInput"
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={details.password}
              onChange={handleChange}
              className="form-control"
              id="formGroupExampleInput"
            />
            <label>Password</label>
          </div>
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleSignIn}
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}
