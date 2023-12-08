const { customError } = require("../errors/customError");

const asyncWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      next(customError("Something Broke!", 500));
    }
  }
}

module.exports = asyncWrapper;
