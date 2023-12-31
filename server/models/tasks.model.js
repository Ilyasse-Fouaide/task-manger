const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "task name required"],  // custom message
    trim: true,
    minlength: [6, "must be at least 6 character"],
    maxlength: [20, "max length is 20 character"],
  },
  completed: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const Task = model("tasks", taskSchema);
module.exports = Task;
