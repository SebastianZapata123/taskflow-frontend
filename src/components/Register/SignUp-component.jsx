import { data } from "react-router-dom";
import google from "../../assets/google-logo.svg";
import "../../views/SignUp.css";

function RegisterComponent({ changeComponent }) {
  function hanleUserRegister(event) {
    const data = {
      nombre: event.target.name.value,
      correo: event.target.email.value,
      contraseña: event.target.password.value,
    };
    return { data };
  }
  const jsondata = hanleUserRegister;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsondata),
  };

  async function sendData() {
    const isResponseOk = (response) => {
      if (!response.ok) throw new Error(response.status);
      return response.text();
    };
    const response = await fetch(
      "http://localhost:3000/auth/crearUsuario",
      options
    ).then((res) => isResponseOk(res));
  }
  sendData();

  return (
    <>
      <div className="container">
        <h3>Sign Up</h3>
        <form onSubmit={hanleUserRegister}>
          <p>Your name</p>
          <input type="text" name="name" />

          <p>Email</p>

          <input type="email" name="email" />
          <p>Password</p>
          <input type="password" name="password" />

          <button type="submit">Continue</button>
        </form>

        <div className="login">
          <p>Do you already have an account?</p>{" "}
          <button
            className="log-in-btn"
            onClick={() => changeComponent("login")}
          >
            Log In
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
