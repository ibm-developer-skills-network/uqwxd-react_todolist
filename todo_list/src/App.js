import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let todo = document.getElementById("todoAdd").value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
    } else {
      alert("Enter Valid Task");
    }
    document.getElementById("todoAdd").value = "";
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Add the toggleComplete code here

  // Add the submitEdits code here

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="todoAdd" />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo-text">{todo.text}</div>
          {<button onClick={() => deleteTodo(todo.id)}>Delete</button>}
        </div>
      ))}
    </div>
  );
};
export default App;
