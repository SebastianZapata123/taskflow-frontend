import React, { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import Menu from "../Menu/Menu"; // Asegúrate de importar el componente Menu correctamente
import "./newboardbutton.css";

function NewTaskdButton() {
  const [renderForm, setRenderForm] = useState(false);

  const handleClick = () => {
    if (renderForm === true) {
      setRenderForm(false);
    }
    if (renderForm === false) {
      setRenderForm(true);
    }
  };

  return (
    <div className="newboard">
      <button className="board-button" onClick={handleClick}>
        New Task
        <MdDashboardCustomize className="icon" />
      </button>
      {/* Renderiza condicionalmente el componente Menu */}
      {renderForm && <Menu />}
    </div>
  );
}

export default NewTaskdButton;
