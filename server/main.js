const express = require("express");
const tasks = require("./routes/tasks.routes");

const app = express();

app.use("/api/v1/tasks", tasks);
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `no route match with ${req.originalUrl}`
  })
})

const port = 3000;

app.listen(port, () => console.log("listening..."));
