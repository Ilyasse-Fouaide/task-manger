const express = require("express");

const app = express();

app.route("/").get((req, res) => {
  res.status(200).json({ message: "Task Manager app" })
})

const port = 3000;

app.listen(port, () => console.log("listening..."));
