import React, { useState } from "react";
import "./Todo.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Complete all tasks", isCompleted: true },
    { text: "delectus aut autem", isCompleted: false },
    { text: "quis ut nam facilis et officia qui", isCompleted: false },
    { text: "et porro tempora", isCompleted: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <input
          type="text"
          placeholder="Add your todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" onClick={() => addTodo(inputValue)}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.isCompleted ? "checked" : ""}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button
        className="button"
        onClick={() => setTodos(todos.filter((todo) => !todo.isCompleted))}
      >
        Delete comp tasks
      </button>
    </div>
  );
}

export default TodoList;
