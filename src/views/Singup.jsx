import "./Signup.css";
import logo from "../assets/logo.png";
import google from "../assets/google-logo.svg";
import background from "../assets/group2.png";
import github from "../assets/github.svg";

function Signup() {
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
        <div className="container">
          <h3>Sign Up</h3>
          <p>Email</p>
          <input type="email" />
          <p>Password</p>
          <input type="password" />
          <button>Continue</button>
          <div className="login">
            <p>Do you already have an account?</p> <a href=""> Log In </a>
          </div>

          <button id="google">
            Continue whit <p> Google </p> <img src={google} alt="" />
          </button>
        </div>
      </div>
      <div className="row2">
        <a
          className="githubrepo"
          href="https://github.com/SebastianZapata123/taskflow-frontend"
        >
          <p>
            This project is open-source, <b> learn more</b>
          </p>
          <img src={github} alt="" />
        </a>
        <img src={background} className="githubicon" />
      </div>
    </>
  );
}

export default Signup;
