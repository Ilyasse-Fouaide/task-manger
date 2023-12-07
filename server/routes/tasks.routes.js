const express = require("express");
const router = express.Router();
const tasks = require("../controller/tasks.controller");

router.route("/")
  .get(tasks.index)
  .post(tasks.store);

module.exports = router;
