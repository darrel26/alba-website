import React, { useContext, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import Logo from "../../../assets/alba-logo.svg";
import "./LoginModal.css";
import { LoginStatusContext } from "../LoginContext";

export default function LoginModal() {
  const { loginStatus, setLoginStatus } = useContext(LoginStatusContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setLoginData({
      ...loginData,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.status === 200) {
      sessionStorage.setItem("loginstatus", "true");
      setLoginStatus({
        ...loginStatus,
        status: true,
      });
    } else {
      sessionStorage.setItem("loginstatus", "false");
      setLoginStatus({
        status: false,
        message:
          response.status === 400 ? "user not found!" : "API Endpoint error!",
      });
    }
  };

  return (
    <Modal>
      <form className="login-form modal" onSubmit={handleLogin}>
        <div className="logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="input-field">
          <label htmlFor="email">email :</label>
          <input
            type="text"
            id="login-email"
            value={loginData.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">password :</label>
          <input
            type="password"
            id="login-password"
            value={loginData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div
          className="error-message"
          style={{ display: loginStatus.status ? "none" : "block" }}
        >
          {loginStatus.message}
        </div>
        <button className="btn-login" type="submit">
          Login
        </button>
      </form>
    </Modal>
  );
}
