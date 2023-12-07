const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/TASK-MANAGER';

async function connect() {
  try {
    await mongoose.connect(connectionString)
    console.log("connected");
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect
