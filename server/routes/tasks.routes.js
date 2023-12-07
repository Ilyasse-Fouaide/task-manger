const express = require("express");
const router = express.Router();
const tasks = require("../controller/tasks.controller");

router.route("/")
  .get(tasks.index)
  .post(tasks.store);

router.route("/:id")
  .get(tasks.show)
  .put(tasks.update)
  .delete(tasks.destroy);

module.exports = router;
