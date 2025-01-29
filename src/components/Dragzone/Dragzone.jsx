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
      prioridad: "low",
    },
    {
      id: 2,
      taskname: "Revisar el css",
      desc: "Description2",
      status: "inprogress",
      prioridad: "low",
    },
    {
      id: 3,
      taskname: "Pene",
      desc: "Description3",
      status: "done",
      prioridad: "low",
    },
  ]);

  const cambiarPrioridad = (id, nuevaPrioridad) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, prioridad: nuevaPrioridad } : task
      )
    );
  };

  const cambiarEstado = (id, nuevoEstado) => {
    // FUNCTION PUT AQUI <--- HACIA EL BACKEND
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: nuevoEstado } : task
      )
    );
  };

  return (
    <div className="dragzone">
      <div className="pending">
        <h3>Pending</h3>
        <div className="tasklabel">
          {tasks
            .filter(
              (task) => task.status === "pending" && task.prioridad === "high"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.status === "pending" && task.prioridad === "medium"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.status === "pending" && task.prioridad === "low"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
        </div>
      </div>
      <div className="inprogress">
        <h3>In Progress</h3>
        <div className="tasklabel">
          {tasks
            .filter(
              (task) =>
                task.status === "inprogress" && task.prioridad === "high"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) =>
                task.status === "inprogress" && task.prioridad === "medium"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.status === "inprogress" && task.prioridad === "low"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
        </div>
      </div>
      <div className="done">
        <h3>Done</h3>
        <div className="tasklabel">
          {tasks
            .filter(
              (task) => task.status === "done" && task.prioridad === "high"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.status === "done" && task.prioridad === "medium"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.status === "done" && task.prioridad === "low"
            )
            .map((task) => (
              <Card
                key={task.id}
                id={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dragzone;
