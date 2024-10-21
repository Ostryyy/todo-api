const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createTask = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const task = new Task({
      title,
      description,
      userId: req.user._id,
      status: status || "todo",
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task || task.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ error: "Task not found" });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findById(taskId);
    if (!task || task.userId.toString() !== req.user._id.toString()) {
      return res.status(404).json({ error: "Task not found" });
    }
    await Task.findByIdAndDelete(taskId);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
