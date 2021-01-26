import { Router } from "express";
import Task from "../models/Tasks";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  const taskSaved = await newTask.save();
  res.json(taskSaved);
});

export default router;
