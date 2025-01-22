import "./Signup.css";
import logo from "../assets/logo.png";
import background from "../assets/group2.png";
import github from "../assets/github.svg";
import opensource from "../assets/opensource.svg";
import RegisterComponent from "../components/Register/SignUp-component";
import LoginComponent from "../components/Login/LogIn-component";
import { useState } from "react";

function Signup() {
  const [currentComponent, serCurrentComponent] = useState("login");
  const handleComponentChange = (component) => {
    serCurrentComponent(component);
  };

  return (
    <>
      <div className="row1">
        <div className="logo">
          <img src={logo} className="logo-img" />
          <h1>TaskFlow</h1>
        </div>
        <p className="taskflow">
          Organize, collaborate, and let your team thrive with <b>TaskFlow.</b>
        </p>
        {currentComponent === "login" && (
          <LoginComponent changeComponent={handleComponentChange} />
        )}
        {currentComponent === "signup" && (
          <RegisterComponent changeComponent={handleComponentChange} />
        )}
      </div>
      <div className="row2">
        <img src={background} className="githubicon" />
        <a
          className="githubrepo"
          href="https://github.com/SebastianZapata123/taskflow-frontend"
        >
          <img src={opensource} className="opensource" />
          <p>
            This project is open-source, <b> learn more</b>
          </p>
          <img src={github} alt="" />
        </a>
      </div>
    </>
  );
}

export default Signup;
