import google from "../../assets/google-logo.svg";
import "../../views/SignUp.css";
import { useState } from "react";

function LoginComponent({ changeComponent }) {
  const [loading, setLoading] = useState("");
  const loadingFunction = () => {
    setLoading("active");
    setInterval(() => {
      setLoading("");
    }, 2000);
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();

    const data = {
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
        "http://localhost:3000/auth/login/",
        options
      );
      const result = await response.json();

      // Recuperar el tolken de la respuesta
      console.log(result);
      const token = result.data.token;
      const username = result.data.nombre;
      const email = result.data.correo;

      localStorage.setItem("username", username);
      localStorage.setItem("useremail", email);

      setInterval(() => {
        window.location.href = "/home";
      }, 1000);

      // Guardar el token en el local storage para usarse despues en cada peticion GET a la API
      localStorage.setItem("jwt", token);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="container">
        <h3>Log In</h3>
        <p>Email</p>
        <form onSubmit={handleUserLogin}>
          <input type="email" name="email" />
          <p>Password</p>
          <input type="password" name="password" />

          <button type="submit" onClick={loadingFunction} className="continue">
            <div className={`${loading}`}></div>
            Continue
          </button>
        </form>
        <div className="login">
          <p>Dont you have an account?</p>
          <button
            className="log-in-btn"
            onClick={() => changeComponent("signup")}
          >
            Sign Up
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
