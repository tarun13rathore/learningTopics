import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (editTodo) {
        const updatedTodos = todos.map((todo) =>
          todo.id === editTodo ? { ...todo, title: inputValue } : todo
        );
        setTodos(updatedTodos);
        setEditTodo(null);
      } else {
        const newTodo = {
          id: uuidv4(),
          title: inputValue,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      }
      setInputValue("");
    }
  };

  const handleTodoDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleTodoEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditTodo(id);
    setInputValue(todo.title);
  };

  const handleTodoComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">{editTodo ? "Edit Todo" : "Add Todo"}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleTodoComplete(todo.id)}
            >
              {todo.title}
            </span>
            <div>
              <FaEdit onClick={() => handleTodoEdit(todo.id)} />
              <FaTrash onClick={() => handleTodoDelete(todo.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
