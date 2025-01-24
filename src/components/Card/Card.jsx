import { MdAddTask } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./card.css";
import NewTask from "../NewTask/NewTask";

export default function Card() {
  let color = "#FFB3BA";
  return (
    <>
      <div
        className="card"
        style={{
          borderTop: `10px solid ${color}`,
        }}
      >
        <h3>Nombre del estado</h3>
        <button className="removestatus">
          <RiDeleteBin6Line />
        </button>

        <NewTask taskname="Hola" />
        <NewTask taskname="Prueba de tareas" />

        <button className="button-newtask">
          <MdAddTask className="iconewtask" />
          Add new task{" "}
        </button>
      </div>
    </>
  );
}
