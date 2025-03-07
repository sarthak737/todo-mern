import express from "express";
import { authUser } from "../middlewares/auth.middlewares.js";
import { Todo } from "../models/todo.models.js";
const todoRouter = express.Router();

todoRouter.post("/post", authUser, async (req, res) => {
  try {
    const { task, status } = req.body;
    if (!task) {
      return res.status(401).send("Enter a task");
    }
    const user = req.user;
    console.log(user);
    const todo = await Todo.create({ task, status, createdBy: user._id });
    const finalTodo = await todo.save();
    res.status(200).send(finalTodo);
  } catch (err) {
    return res.status(401).send(err);
  }
});
todoRouter.get("/get", authUser, async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(201).send(todo);
  } catch (err) {
    res.status(401).send(err);
  }
});

export { todoRouter };
