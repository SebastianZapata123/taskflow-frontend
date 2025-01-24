import { IoIosAddCircle } from "react-icons/io";
import "../Menu/menu.css";
import React, { useState } from "react";
import Circle from "@uiw/react-color-circle";

function Menu() {
  const [hex, setHex] = useState("#F44E3B");
  return (
    <>
      <button className="addstatus">
        <p>Add new status</p>
        <IoIosAddCircle />
      </button>
      <div className="formulario">
        <form action="">
          <p> Status name </p>
          <input type="text" />
          <p>Select color</p>
          <Circle
            colors={[
              "#FF8A80",
              "#FFAB40",
              "#FFD740",
              "#EEFF41",
              "#69F0AE",
              "#40C4FF",
              "#7C4DFF",
              "#FF80AB",
              "#D4E157",
              "#F48FB1",
              "#81D4FA",
              "#B39DDB",
              "#FFCC80",
              "#E1BEE7",
              "#C5E1A5",
              "#FFF176",
              "#FFAB91",
              "#80CBC4",
              "#90CAF9",
              "#A5D6A7",
              "#FFB3BA",
              "#FFCC99",
              "#FFF4B3",
              "#E5F4A9",
              "#E4C5E4",
            ]}
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
            }}
          />
          <button type="submit" className="save">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Menu;
