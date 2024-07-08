import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-background">
      <img className="login-logo" src={Logo} alt="" />

      <div className="login-container">
        <div className="login">Login</div>
        <div className="inner-container-login">
          <input className="login-emaill" placeholder="Email address"></input>
          <input className="login-password" placeholder="Password"></input>
          <button onClick={() => navigate("/")} className="login-button">
            Login to Your Account
          </button>
          <div className="login-container2">
            <div>Don't have an account ? </div>
            <div className="login-signup" onClick={() => navigate("/signup")}>
              {" "}
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
