import "./menu.css";

function Menu() {
  const refresh = () => {
    window.location.reload();
  };
  const handleTaskForm = async (event) => {
    event.preventDefault();
    const data = {
      titulo: event.target.title.value,
      descripcion: event.target.desc.value,
      prioridad: "low",
      estado: "pending",
    };

    const jwtToken = localStorage.getItem("jwt");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("http://localhost:3000/api/crear", options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="formulario">
        <form onSubmit={handleTaskForm}>
          <p>Task title</p>
          <input type="text" name="title" required />
          <p>Task description</p>
          <input type="text" name="desc" required />
          <button className="save" type="submit" onClick={refresh}>
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Menu;
