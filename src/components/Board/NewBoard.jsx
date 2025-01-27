import { MdDashboardCustomize } from "react-icons/md";
import "../Board/newboardbutton.css";

function NewTaskdButton() {
  return (
    <>
      <div className="newboard">
        <button className="board-button">
          New Task
          <MdDashboardCustomize className="icon" />
        </button>
      </div>
    </>
  );
}

export default NewTaskdButton;
