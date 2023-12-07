const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/TASK-MANAGER';

function connect() {
  mongoose.connect(connectionString)
    .then((data) => {
      console.log("connected...")
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = connect
