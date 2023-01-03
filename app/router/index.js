const express = require("express");

const errorHandler = require("../middlewares/error.middleware");

const apiRouter = require("./api");
const webRouter = require("./web");

const router = express.Router();

router.use(webRouter);
router.use("/api", apiRouter);

router.use(errorHandler.notFound);
router.use(errorHandler.appError);

module.exports = router;
