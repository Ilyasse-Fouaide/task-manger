module.exports.index = (req, res) => {
  res.status(200).json({ message: "Get All tasks" })
}

module.exports.store = (req, res) => {
  res.status(200).json({ message: "Create task." });
}

module.exports.show = (req, res) => {
  res.status(200).json({ message: "show task." });
}

module.exports.update = (req, res) => {
  res.status(200).json({ message: "update task." });
}

module.exports.destroy = (req, res) => {
  res.status(200).json({ message: "delete task." });
}
