const { customError } = require("../errors/customError");

module.exports.notFound = (req, res, next) => {
  next(customError(`no route match with ${req.originalUrl}`, 404));
}
