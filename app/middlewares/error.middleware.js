const logger = require("../../utils/logger");

const notFound = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "Not found",
  });
};

const appError = (err, req, res, next) => {
  logger.error(err.message);
  const errStatusCode = err.statusCode || 400;
  const errMessage = err.message || "Something went wrong";
  res.status(errStatusCode).json({
    status: "error",
    message: errMessage,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = { notFound, appError };
