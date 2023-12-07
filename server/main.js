const express = require("express");
const tasks = require("./routes/tasks.routes");

const app = express();

app.use("/api/v1", tasks);

const port = 3000;

app.listen(port, () => console.log("listening..."));
