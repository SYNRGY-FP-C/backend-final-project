const notFound = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "Not found",
  });
};

const appError = (err, req, res, next) => {
  console.log("Middleware Error Hadnling");
  const errStatusCode = err.statusCode || 500;
  const errMessage = err.message || "Something went wrong";
  res.status(errStatusCode).json({
    code: errStatusCode,
    status: "error",
    message: errMessage,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = { notFound, appError };
