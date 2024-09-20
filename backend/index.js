import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import todosRouter from "./routes/todos.js";
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
