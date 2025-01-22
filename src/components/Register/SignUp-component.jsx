import google from "../../assets/google-logo.svg";
import "../../views/SignUp.css";

function RegisterComponent({ changeComponent }) {
  return (
    <>
      <div className="container">
        <h3>Sign Up</h3>
        <p>Email</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" />
        <button>Continue</button>
        <div className="login">
          <p>Do you already have an account?</p>{" "}
          <button
            className="log-in-btn"
            onClick={() => changeComponent("login")}
          >
            {" "}
            Log In{" "}
          </button>
        </div>

        <button id="google">
          Continue whit <p> Google </p> <img src={google} alt="" />
        </button>
      </div>
    </>
  );
}

export default RegisterComponent;
