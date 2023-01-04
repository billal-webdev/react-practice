function AddNewTodo(props) {
    const {todo, setTodo, todos, setTodos, editableMode, setEditableMode, editableTodoId, setEditableTodoId} = props;
  //Adding a new todo to the list
  function handleAddTodo(ev) {
    ev.preventDefault();
    if (!todo || todo === " " || todo === "  ") {
      alert("Please input a todo");
      return;
    }
    setTodos([...todos, { isCompleted: false, id: Date.now() + "", todo }]);
    setTodo("");
  }

  function handleUpdateTodo(ev) {
    ev.preventDefault();
    if (!todo || todo === " " || todo === "  ") {
      alert("Please input a todo");
      return;
    }
    let updatedTodos = todos.map((currTodo) => {
      if (currTodo.id === editableTodoId) {
        currTodo.todo = todo;
        return currTodo;
      } else {
        return currTodo;
      }
    });
    setTodos(updatedTodos);
    setEditableTodoId(null);
    setEditableMode(false);
    setTodo("");
  }

  const handleSubmit = (ev) =>
    editableMode ? handleUpdateTodo(ev) : handleAddTodo(ev);
  const changeHandler = (ev) => setTodo(ev.target.value);

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" onChange={(ev) => changeHandler(ev)} value={todo} />
      <button>{editableMode ? "Update" : "Add Todo"}</button>
    </form>
  );
}
export default AddNewTodo;
