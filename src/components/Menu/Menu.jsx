import "./menu.css";

function Menu() {
  async function handleTaskForm(event) {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      desc: event.target.desc.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    return (
      <>
        <div className="formulario">
          <form onSubmit={handleTaskForm}>
            <p>Task title</p>
            <input type="text" name="title" />
            <p>Task description</p>
            <input type="text" name="desc" />
            <button className="save" type="submit">
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Menu;
