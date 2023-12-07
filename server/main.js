const express = require("express");
const tasks = require("./routes/tasks.routes");
const connect = require("./db/connect");

const app = express();

// connect to the db
connect();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `no route match with ${req.originalUrl}`
  })
})

const port = 3000;

app.listen(port, () => console.log("listening..."));
