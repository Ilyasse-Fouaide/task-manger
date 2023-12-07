const Task = require("../models/tasks.model");

module.exports.index = async (req, res) => {
  try {
    const tasks = await Task.find({}, { __v: 0 });

    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

module.exports.store = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "task name required" });
    }

    const task = await Task.create({ name });
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id, { __v: 0 });

    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

module.exports.update = (req, res) => {
  res.status(200).json({ message: "update task." });
}

module.exports.destroy = (req, res) => {
  res.status(200).json({ message: "delete task." });
}
