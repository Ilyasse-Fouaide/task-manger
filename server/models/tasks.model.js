const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "the name is required"],  // custom message
    trim: true,
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
