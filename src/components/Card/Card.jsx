import "./card.css";
import { MdDelete } from "react-icons/md";

export default function Card({
  id,
  taskname,
  desc,
  status,
  cambiarEstado,
  prioridad,
  cambiarPropiedad,
}) {
  const manejarCambio = (e) => {
    cambiarEstado(id, e.target.value); // Llama a la función cambiarEstado con el nuevo estado
  };

  const prioridadCambio = (e) => {
    cambiarPropiedad(id, e.target.value);
  };
  async function removeTask() {
    const jwtToken = localStorage.getItem("jwt");
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/eliminar/${id}`,
        options
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
    window.location.reload();
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
        <label htmlFor={`estado-${id}`}>Status:</label>
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
      <div className="prioridad">
        <label htmlFor={`estado-${id}`}>Priority:</label>
        <select
          id={`prioridad-${id}`}
          value={prioridad}
          onChange={prioridadCambio}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
