module.exports.index = (req, res) => {
  res.status(200).json({ message: "Get All tasks" })
}

module.exports.store = (req, res) => {
  res.status(200).json({ message: "Create task." });
}

module.exports.show = (req, res) => {
  res.status(200).json({ message: "show task." });
}
