import { MdKeyboardArrowRight } from "react-icons/md";
import "../BoardLabel/boardlabel.css";

function BoardLabel(props) {
  return (
    <>
      <div className="newboardlabel">
        <button className="board-button">
          {props.name}
          <MdKeyboardArrowRight className="iconboard" />
        </button>
      </div>
    </>
  );
}

export default BoardLabel;
