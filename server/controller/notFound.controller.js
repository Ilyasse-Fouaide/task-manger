module.exports.notFound = (req, res, next) => {
  const error = new Error(`no route match with ${req.originalUrl}`);
  error.status = 404;
  next(error);
}
