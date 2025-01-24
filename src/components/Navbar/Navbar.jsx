import logo from "../../assets/logo.png";
import "../Navbar/navbar.css";
import User from "../User/User";
import NewBoardButton from "../Board/NewBoard";
import BoardLabel from "../BoardLabel/BoardLabel";
import Logout from "../Logout/Logout";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="layer1">
          <img src={logo} />
          <h3 className="titulo">TaskFlow</h3>
        </div>
        <div className="layer2">
          <User />
          <BoardLabel name="BoardExample1" />
          <BoardLabel name="BoardExample1" />
          <BoardLabel name="BoardExample1" />
          <BoardLabel name="BoardExample1" />
          <BoardLabel name="BoardExample1" />
        </div>
        <NewBoardButton />
        <Logout />
      </nav>
      ;
    </>
  );
}

export default Navbar;
