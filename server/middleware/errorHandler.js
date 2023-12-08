const { CustomError } = require("../errors/customError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.status).json({
      success: false,
      error: {
        status: err.status,
        message: err.message
      }
    });
  }
  res.status(500).json({
    success: false,
    error: {
      status: 500,
      message: "Something Broke!"
    }
  })
}

module.exports = errorHandler;
