import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "../Dragzone/dragzone.css";

function Dragzone() {
  const [tasks, setTasks] = useState([]); // Inicializa el estado con un array vacío
  const jwtToken = localStorage.getItem("jwt");
  // Función para obtener las tareas
  async function getTask() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const response = await fetch(`http://localhost:3000/api/tareas`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
      return []; // Devuelve un array vacío en caso de error
    }
  }

  // Cargar las tareas cuando el componente se monta
  useEffect(() => {
    getTask().then((result) => {
      setTasks(result); // Actualiza el estado con las tareas obtenidas
    });
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  async function actualizarPrioridad(value, nuevaPrioridad) {
    const data = {
      prioridad: nuevaPrioridad,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      `http://localhost:3000/api/actualizar/${value}`,
      options
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  }
  // Función para cambiar la prioridad de una tarea
  const cambiarPrioridad = (id, nuevaPrioridad) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        actualizarPrioridad(task.id, nuevaPrioridad);
        task.id === id ? { ...task, prioridad: nuevaPrioridad } : task;
      })
    );
  };

  // Función para cambiar el estado de una tarea
  const cambiarEstado = (id, nuevoEstado) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, estado: nuevoEstado } : task
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
              (task) => task.estado === "pending" && task.prioridad === "high"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.estado === "pending" && task.prioridad === "medium"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.estado === "pending" && task.prioridad === "low"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
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
                task.estado === "inprogress" && task.prioridad === "high"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) =>
                task.estado === "inprogress" && task.prioridad === "medium"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.estado === "inprogress" && task.prioridad === "low"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
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
              (task) => task.estado === "done" && task.prioridad === "high"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.estado === "done" && task.prioridad === "medium"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
                cambiarEstado={cambiarEstado}
                prioridad={task.prioridad}
                cambiarPropiedad={cambiarPrioridad}
              />
            ))}
          {tasks
            .filter(
              (task) => task.estado === "done" && task.prioridad === "low"
            )
            .map((task) => (
              <Card
                key={task._id}
                id={task._id}
                taskname={task.titulo}
                desc={task.descripcion}
                status={task.estado}
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
