const asyncWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  }
}

module.exports = asyncWrapper;
