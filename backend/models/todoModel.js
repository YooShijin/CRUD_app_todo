import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
