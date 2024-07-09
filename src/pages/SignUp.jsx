import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Helmet } from 'react-helmet';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="login-background">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <img className="login-logo" src={Logo} alt="" />

      <div className="login-container">
        <div className="login">Sign Up</div>
        <div className="inner-container-login">
          <input className="login-emaill" placeholder="Email address"></input>
          <input className="login-password" placeholder="Password"></input>
          <input
            className="login-password"
            placeholder="Repeat password"
          ></input>
          <button onClick={() => navigate("/")} className="login-button">
            Create an account
          </button>
          <div className="login-container2">
            <div>Already have an account ? </div>
            <div className="login-signup" onClick={() => navigate("/login")}>
              {" "}
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
