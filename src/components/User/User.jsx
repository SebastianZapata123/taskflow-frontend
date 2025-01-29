import userphoto from "../../assets/user.png";
import "../User/user.css";

export default function User() {
  const username = localStorage.getItem("username");
  const useremail = localStorage.getItem("useremail");

  return (
    <>
      <div className="usercontent">
        <img src={userphoto} alt="" />
        <div className="data">
          <h3>{username}</h3>
          <p>{useremail}</p>
        </div>
      </div>
    </>
  );
}
