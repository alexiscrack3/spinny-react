import "./Login.css";
import React from "react";
import LoginBox from "../../components/login/LoginBox";
import logo from "../../logo.svg";

function Login() {
  return (
    <React.Fragment>
      <div className="login-logo mt-3 d-flex flex-column align-items-center">
        <img alt="Spinny" src={logo} width="50" height="50" />
      </div>
      <LoginBox />
    </React.Fragment>
  );
}

export default Login;
