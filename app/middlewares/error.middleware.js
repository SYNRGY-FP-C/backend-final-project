const logger = require("../../utils/logger");

const notFound = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "Not found",
  });
};

const appError = (err, req, res, _next) => {
  logger.error(err.message);
  const errstatus_code = err.status_code || 400;
  const errMessage = err.message || "Something went wrong";
  res.status(errstatus_code).json({
    status: "error",
    message: errMessage,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = { notFound, appError };
