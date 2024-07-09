import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Helmet } from 'react-helmet';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false); // Hata durumunu tutacak durum değişkeni

  const loginFunc = () => {
    if (email === "" && password === "") {
      setError(true); // Hata durumunu true yap
      alert("Please enter your email and password.");
    } else if (password === "") {
      setError(true); // Hata durumunu true yap
      alert("Please enter your password.");
    } else if (email === "") {
      setError(true); // Hata durumunu true yap
      alert("Please enter your email address.");
    } else {
      if (email === "ikbal" && password === "1234") {
        navigate("/");
      } else {
        setError(true); // Hata durumunu true yap
        alert("Your Password or Nickname Wrıng");
      }
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false); // Her input değiştiğinde hata durumunu sıfırla
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false); // Her input değiştiğinde hata durumunu sıfırla
  };

  return (
    <div className="login-background">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <img className="login-logo" src={Logo} alt="Logo" />

      <div className="login-container">
        <div className="login">Login</div>
        <div className="inner-container-login">
          <input
            value={email}
            onChange={handleEmailChange}
            className={`login-emaill ${error ? "error-border" : ""}`} // Hata durumuna göre sınıf ekle
            placeholder="Email address"
            type="email"
          />
          <input
            value={password}
            onChange={handlePasswordChange}
            className={`login-password ${error ? "error-border" : ""}`} // Hata durumuna göre sınıf ekle
            placeholder="Password"
            type="password"
          />
          <button onClick={loginFunc} className="login-button">
            Login to Your Account
          </button>
          <div className="login-container2">
            <div>Don't have an account?</div>
            <div className="login-signup" onClick={() => navigate("/signup")}>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
