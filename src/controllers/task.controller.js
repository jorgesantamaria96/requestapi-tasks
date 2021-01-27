import Task from "../models/Tasks";

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false,
  });
  const taskSaved = await newTask.save();
  res.json(taskSaved);
};

export const findOneTask = async (req, res) => {
  console.log(req.params.id);
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const data = await Task.findByIdAndDelete(req.params.id);
  res.json({
    message: "Task were deleted successfully",
    data: data,
  });
};

export const findAllDoneTask = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mesage: "Task was updated successfully,", data: updatedTask });
};
