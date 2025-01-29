import React, { useState } from "react";
import Card from "../Card/Card";
import "../Dragzone/dragzone.css";

async function getTask() {
  const jwtToken = localStorage.getItem("jwt");
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  try {
    const response = await fetch(`http://localhost:3000/api/tareas`, options);

    const result = await response.json(); // Devuelve un Array de objetos esta es la manera de acceder

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

function Dragzone() {
  const array = [];
  const taskList = getTask().then((result) => {
    result.map((task) => array.push(task));
  });

  // GET TAREAS AQUI <--- HACIA EL BACKEND

  const [tasks, setTasks] = useState(array);

  const cambiarPrioridad = (id, nuevaPrioridad) => {
    // FUNCTION PUT AQUI <--- HACIA EL BACKEND
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
