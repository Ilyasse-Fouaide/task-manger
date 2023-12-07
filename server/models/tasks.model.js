const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: String,
  completed: Boolean,
});

const Task = model("tasks", taskSchema);
module.exports = Task;
