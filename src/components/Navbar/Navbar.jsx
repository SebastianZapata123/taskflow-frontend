import logo from "../../assets/logo.png";
import "../Navbar/navbar.css";
import user from "../../assets/user.png";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="layer1">
          <img src={logo} />
          <h3 className="titulo">TaskFlow</h3>
        </div>
        <div className="layer2">
          <img src={user} alt="" width={30} />
        </div>
      </nav>
      ;
    </>
  );
}

export default Navbar;
