import React, { useState } from "react";
import Card from "../Card/Card";
import "../Dragzone/dragzone.css";

function Dragzone() {
  const [tasks, setTasks] = useState([
    { id: 1, taskname: "Tarea1", desc: "Description1", status: "pending" },
    { id: 2, taskname: "Tarea2", desc: "Description2", status: "inprogress" },
    { id: 3, taskname: "Tarea3", desc: "Description3", status: "done" },
  ]);

  return (
    <div className="dragzone">
      <div className="pending">
        Pending tasks
        <div className="tasklabel">
          {tasks
            .filter((task) => task.status === "pending")
            .map((task) => (
              <Card
                key={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
              />
            ))}
        </div>
      </div>
      <div className="inprogress">
        In Progress
        <div className="tasklabel">
          {tasks
            .filter((task) => task.status === "inprogress")
            .map((task) => (
              <Card
                key={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
              />
            ))}
        </div>
      </div>
      <div className="done">
        Done
        <div className="tasklabel">
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <Card
                key={task.id}
                taskname={task.taskname}
                desc={task.desc}
                status={task.status}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dragzone;
