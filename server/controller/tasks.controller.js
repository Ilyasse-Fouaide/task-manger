const Task = require("../models/tasks.model");

module.exports.index = (req, res) => {
  res.status(200).json({ message: "Get All tasks" })
}

module.exports.store = async (req, res) => {
  const task = await Task.create({
    name: "Task-01",
    completed: false,
  });
  res.status(201).json({ success: true, task });
}

module.exports.show = (req, res) => {
  res.status(200).json({ message: "show task." });
}

module.exports.update = (req, res) => {
  res.status(200).json({ message: "update task." });
}

module.exports.destroy = (req, res) => {
  res.status(200).json({ message: "delete task." });
}
