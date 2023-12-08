const express = require("express");
const tasks = require("./routes/tasks.routes");
const connect = require("./db/connect");
const dotenv = require("dotenv");
const { notFound } = require("./controller/notFound.controller");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

// connect to the db
connect();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

// use error handler middleware
app.use(errorHandler);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log("listening..."));
