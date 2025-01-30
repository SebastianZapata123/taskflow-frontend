import google from "../../assets/google-logo.svg";
import "../../views/SignUp.css";
import { useState } from "react";

function RegisterComponent({ changeComponent }) {
  const [loading, setLoading] = useState("");
  const loadingFunction = () => {
    setLoading("active");
    setInterval(() => {
      setLoading("");
    }, 2000);
  };
  const handleUserRegister = async (event) => {
    event.preventDefault();

    const data = {
      nombre: event.target.name.value,
      correo: event.target.email.value,
      contraseña: event.target.password.value,
    };

    // Opciones para la solicitud
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/auth/crearUsuario/",
        options
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h3>Sign Up</h3>
        <form onSubmit={handleUserRegister}>
          <p>Your name</p>
          <input type="text" name="name" required />
          <p>Email</p>
          <input type="email" name="email" required />
          <p>Password</p>
          <input type="password" name="password" required />

          <button type="submit" onClick={loadingFunction}>
            <div className={`loader ${loading} `}></div>
            Continue
          </button>
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
        {/*
        <button id="google">
          Continue whit <p> Google </p> <img src={google} alt="" />
        </button> */}
      </div>
    </>
  );
}

export default RegisterComponent;
