import React, { useState } from "react";
import { addTodo } from "../services/api";

const TodoForm = ({ onTodoAdded }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo = await addTodo({ title, date, completed: false });
    onTodoAdded(newTodo);
    setTitle("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Add New Todo</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
