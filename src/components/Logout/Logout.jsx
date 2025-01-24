import { CiLogout } from "react-icons/ci";
import "../Logout/logout.css";

function Logout() {
  return (
    <>
      <div className="logout">
        <button className="logout-button">
          Logout
          <CiLogout className="iconlogout" />
        </button>
      </div>
    </>
  );
}

export default Logout;
