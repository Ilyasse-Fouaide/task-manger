const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "the name is required"]  // custom message
  },
  completed: Boolean,
});

const Task = model("tasks", taskSchema);
module.exports = Task;
