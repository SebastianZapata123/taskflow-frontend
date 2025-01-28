import google from "../../assets/google-logo.svg";
import "../../views/SignUp.css";

function LoginComponent({ changeComponent }) {
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

      console.log(result);
      const token = result.data.token;

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

          <button type="submit">Continue</button>
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
