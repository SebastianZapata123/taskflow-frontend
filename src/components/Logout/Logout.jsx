import { CiLogout } from "react-icons/ci";
import "../Logout/logout.css";

function Logout() {
  // limpiar localstorage y redirigir al login
  function handleUserLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    setInterval(() => {
      window.location.href = "/login";
    }, 1000);
  }
  return (
    <>
      <div className="logout">
        <button className="logout-button" onClick={handleUserLogout}>
          Logout
          <CiLogout className="iconlogout" />
        </button>
      </div>
    </>
  );
}

export default Logout;
