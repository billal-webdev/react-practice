function TodoList(props) {
    const {setTodo, todos, setTodos, setEditableMode, setEditableTodoId} = props;
  function handleCompleteTodo(id) {
    let changeCompleteTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(changeCompleteTodos);
  }

  function handleEditTodo(todo) {
    setEditableMode(true);
    setEditableTodoId(todo.id);
    setTodo(todo.todo);
  }

  function handleDeleteTodo(id) {
    const isDelete = window.confirm("Are you sure to delete ?");
    if (!isDelete) return;
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <div className="todoTitle">
              <span
                style={
                  todo.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {todo.todo}
              </span>
            </div>
            <div className="todo-action-buttons">
              <button onClick={(ev) => handleCompleteTodo(todo.id)}>
                Complete
              </button>
              <button onClick={(ev) => handleEditTodo(todo)}>Edit</button>
              <button onClick={(ev) => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
      {todos.length === 0 ? "No Tasks" : ""}
    </ul>
  );
}
export default TodoList;
