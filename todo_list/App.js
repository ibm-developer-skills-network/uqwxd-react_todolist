import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  
    useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
          setTodos(loadedTodos);
        }
      }, []);
    
    useEffect(() => {
        if(todos.length > 0) {
            const json = JSON.stringify(todos);
            localStorage.setItem("todos", json);
        }
      }, [todos]);

  function deleteTodo(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  function submitEdits(newtodo) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === newtodo.id) {
        todo.text = document.getElementById(newtodo.id).value;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }



  function handleSubmit(e) {
    e.preventDefault();

    let todoInput = document.getElementById('todoAdd');
    let todoText = todoInput.value.trim();

    if (todoText.length > 0) {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      todoInput.value = "";
    } else {
      alert("Enter a valid task");
    }
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id = 'todoAdd'
        />
        <button type="submit">Add Todo</button>
      </form>
{todos.map((todo) => (
<div key={todo.id} className="todo">
<div className="todo-text">
  {/* Add checkbox for toggle complete */}
  <input
    type="checkbox"
    id="completed"
    checked={todo.completed}
    onChange={() => toggleComplete(todo.id)}
  />
  {/* if it is edit mode, display input box, else display text */}
  {todo.id === todoEditing ?
    (<input
      type="text"
      id = {todo.id}
      defaultValue={todo.text}
    />) :
    (<div>{todo.text}</div>)
  }
</div>
<div className="todo-actions">
  {/* if it is edit mode, allow submit edit, else allow edit */}
  {todo.id === todoEditing ?
  (
    <button onClick={() => submitEdits(todo)}>Submit Edits</button>
  ) :
  (
    <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
  )}
  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
 </div>
</div>
))}
    </div>
  );
};
export default App;