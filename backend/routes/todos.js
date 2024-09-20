import express from "express";

import Todo from "../models/todoModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    date: req.body.date,
    completed: req.body.completed,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      todo.title = req.body.title || todo.title;
      todo.date = req.body.date || todo.date;
      todo.completed =
        req.body.completed !== undefined ? req.body.completed : todo.completed;

      const updatedTodo = await todo.save();
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      await Todo.findByIdAndDelete(req.params.id);
      res.json({ message: "Todo deleted" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
