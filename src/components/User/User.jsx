import userphoto from "../../assets/user.png";
import "../User/user.css";

export default function User() {
  return (
    <>
      <div className="usercontent">
        <img src={userphoto} alt="" />
        <div className="data">
          <h3>Username</h3>
          <p>Correo@example.com</p>
        </div>
      </div>
    </>
  );
}
