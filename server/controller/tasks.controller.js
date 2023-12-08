const Task = require("../models/tasks.model");
const asyncWrapper = require("../middleware/asyncWrapper");

module.exports.index = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}, { __v: 0 });
  res.status(200).json({ success: true, tasks });
});

module.exports.store = asyncWrapper(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: "task name required" });
  }

  const task = await Task.create({ name });
  res.status(201).json({ success: true, task });
});

module.exports.show = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id, { __v: 0 });

  if (!task) {
    return res.status(400).json({ success: false, message: "Task not found" });
  }

  res.status(200).json({ success: true, task });
});

module.exports.update = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const { name } = req.body;
  const { completed } = req.body;

  if (!taskId) {
    return res.status(400).json({ success: false, message: "Task Id required." });
  }

  const task = await Task.findById(taskId, { __v: 0 });

  if (!task) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }

  const newTask = await Task.findByIdAndUpdate(taskId, { name, completed }, { new: true, runValidators: true });

  res.status(200).json({ id: taskId, newTask });
});

module.exports.destroy = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    return res.status(404).json({ success: false, message: "Task not found" });
  }

  res.status(200).json({ success: true });
});
