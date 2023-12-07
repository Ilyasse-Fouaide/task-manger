const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "the name is required"],  // custom message
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const Task = model("tasks", taskSchema);
module.exports = Task;
