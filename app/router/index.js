const express = require("express");

const errorHandler = require("../middlewares/error.middleware");

const apiRouter = require("./api");
const webRouter = require("./web");
const mockAPI = require("./mock");

const router = express.Router();

router.use(mockAPI);
router.use(webRouter);
router.use("/api", apiRouter);

router.use(errorHandler.notFound);
router.use(errorHandler.appError);

module.exports = router;
