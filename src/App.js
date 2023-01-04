import { useState } from "react";
import "./Style.css";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editableMode, setEditableMode] = useState(false);
  const [editableTodoId, setEditableTodoId] = useState(null);
  return (
    <div className="App">
      <AddNewTodo
      todo = {todo}
      setTodo = {setTodo}
      todos = {todos}
      setTodos = {setTodos}
      editableMode = {editableMode}
      setEditableMode = {setEditableMode}
      editableTodoId = {editableTodoId}
      setEditableTodoId = {setEditableTodoId}
      />
      <TodoList
      todo = {todo}
      setTodo = {setTodo}
      todos = {todos}
      setTodos = {setTodos}
      editableMode = {editableMode}
      setEditableMode = {setEditableMode}
      editableTodoId = {editableTodoId}
      setEditableTodoId = {setEditableTodoId}
      />
    </div>
  );
}
export default App;
