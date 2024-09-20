import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import { getTodos } from "./services/api";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  };

  const handleTodoAdded = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodoUpdated = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo))
    );
  };

  const handleTodoDeleted = (todoId) => {
    setTodos(todos.filter((todo) => todo._id !== todoId));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 max-w-md">
      {/* <h1 className="text-2xl font-bold mb-4">Todo App</h1> */}
      <TodoForm onTodoAdded={handleTodoAdded} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TodoList
        todos={filteredTodos}
        onTodoUpdated={handleTodoUpdated}
        onTodoDeleted={handleTodoDeleted}
      />
    </div>
  );
};

export default App;
