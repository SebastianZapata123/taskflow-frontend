import "./card.css";
import { MdDelete } from "react-icons/md";

export default function Card({ id, taskname, desc, status, cambiarEstado }) {
  const manejarCambio = (e) => {
    cambiarEstado(id, e.target.value); // Llama a la función cambiarEstado con el nuevo estado
  };
  async function removeTask() {
    alert("removve");
  }

  return (
    <div className="card">
      <div className="title">
        <p>{taskname}</p>
      </div>
      <div className="taskdesc">
        <p>{desc}</p>
      </div>
      <div className="statuschange">
        <label htmlFor={`estado-${id}`}>Estado:</label>
        <select
          id={`estado-${id}`}
          value={status}
          onChange={manejarCambio} // Manejador del cambio de estado
        >
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button className="deletetask" onClick={removeTask}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
