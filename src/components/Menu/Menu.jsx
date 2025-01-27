import "../Menu/menu.css";
import React, { useState } from "react";

function Menu() {
  return (
    <>
      <div className="formulario">
        <form action="">
          <p>Task title</p>
          <input type="text" />
          <p>Task description</p>
          <input type="text" />
          <button className="save" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Menu;
