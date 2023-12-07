const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: String,
  completed: Boolean,
});

const Task = model("task", taskSchema);
module.exports = Task;
