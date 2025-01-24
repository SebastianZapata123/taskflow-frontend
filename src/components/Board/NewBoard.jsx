import { MdDashboardCustomize } from "react-icons/md";
import "../Board/newboardbutton.css";

function NewBoardButton() {
  return (
    <>
      <div className="newboard">
        <button className="board-button">
          New Board
          <MdDashboardCustomize className="icon" />
        </button>
      </div>
    </>
  );
}

export default NewBoardButton;
