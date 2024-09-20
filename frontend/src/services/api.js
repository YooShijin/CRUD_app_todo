import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async () => {
  console.log(API_URL);
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const updateTodo = async (todo) => {
  const response = await axios.put(`${API_URL}/${todo._id}`, todo, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const deleteTodo = async (todoId) => {
  await axios.delete(`${API_URL}/${todoId}`);
};
