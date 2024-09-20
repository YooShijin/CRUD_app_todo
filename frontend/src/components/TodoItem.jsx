import React from "react";
import { updateTodo, deleteTodo } from "../services/api";

const TodoItem = ({ todo, onTodoUpdated, onTodoDeleted }) => {
  const handleToggleComplete = async () => {
    const updatedTodo = await updateTodo({
      ...todo,
      completed: !todo.completed,
    });
    onTodoUpdated(updatedTodo);
  };

  const handleDelete = async () => {
    await deleteTodo(todo._id);
    onTodoDeleted(todo._id);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 mb-4 border rounded-lg shadow-sm ${
        todo.completed ? "bg-gray-200" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500"
        />
        <div>
          <span
            className={`text-lg font-medium ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.title}
          </span>
          <div className="ml-2 text-sm text-gray-500">
            {new Date(todo.date).toLocaleDateString()}
          </div>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
