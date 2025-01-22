import google from "../../assets/google-logo.svg";
import "../../views/SignUp.css";

function LoginComponent({ changeComponent }) {
  return (
    <>
      <div className="container">
        <h3>Log In</h3>
        <p>Email</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" />
        <button>Continue</button>
        <div className="login">
          <p>Dont you have an account?</p>
          <button
            className="log-in-btn"
            onClick={() => changeComponent("signup")}
          >
            {" "}
            Sign Up{" "}
          </button>
        </div>

        <button id="google">
          Log in whit <p> Google </p> <img src={google} alt="" />
        </button>
      </div>
    </>
  );
}

export default LoginComponent;
