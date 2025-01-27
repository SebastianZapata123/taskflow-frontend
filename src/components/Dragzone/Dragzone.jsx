import React, { useState } from "react";
import Card from "../Card/Card";
import "../Dragzone/dragzone.css";

function Dragzone() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskname: "Borrar la base de datos :v",
      desc: "loremipsumdolor jalkdjalkjdaldjaldjsajdasdjajdalsjlakdsjalsdjalsjdlasjdalksdjalksdj",
      status: "pending",
    },
    {
      id: 2,
      taskname: "Revisar el css",
      desc: "Description2",
      status: "inprogress",
    },
    { id: 3, taskname: "Pene", desc: "Description3", status: "done" },
  ]);

  const cambiarEstado = (id, nuevoEstado) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: nuevoEstado } : task
      )
    );
  };

  return (
    <div className="dragzone">
      <div className="pending">
        <h3>Pending Tasks</h3>
        <div className="tasklabel">
          {tasks
            .filter((task) => task.status === "pending")
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado} // Pasamos la función
              />
            ))}
        </div>
      </div>
      <div className="inprogress">
        <h3>In Progress</h3>
        <div className="tasklabel">
          {tasks
            .filter((task) => task.status === "inprogress")
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
              />
            ))}
        </div>
      </div>
      <div className="done">
        <h3>Done</h3>
        <div className="tasklabel">
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dragzone;
