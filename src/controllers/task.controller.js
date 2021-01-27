import Task from "../models/Tasks";

export const findAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the tasks",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating a task",
    });
  }
};

export const findOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task)
      return res
        .status(400)
        .json({ message: `Task with id ${id} does not exists` });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving Task with id: ${id}`,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Task.findByIdAndDelete(id);
    res.json({
      message: "Task were deleted successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Cannot delete Task with id: ${id}`,
    });
  }
};

export const findAllDoneTask = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ mesage: "Task was updated successfully,", data: updatedTask });
};
