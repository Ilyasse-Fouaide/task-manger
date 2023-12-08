class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const customError = (message, status) => {
  const error = new CustomError(message, status);
  return error;
}

module.exports = customError;
