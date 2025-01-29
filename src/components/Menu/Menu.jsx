import "./menu.css";

function Menu() {
  function handleTaskForm(event) {
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

export default Menu;
