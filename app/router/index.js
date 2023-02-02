const express = require("express");
const {
  isAuthorized,
  isAuthenticated,
} = require("../middlewares/auth.middleware");
const errorHandler = require("../middlewares/error.middleware");
const { ROLE_SUPERADMIN } = require("../../constants/roles");

const apiRouter = require("./api");
const webRouter = require("./web");
const mockAPI = require("./mock");

const router = express.Router();

// router.use(isAuthenticated);
// router.use(isAuthorized([ROLE_SUPERADMIN]));

router.use(mockAPI);
router.use(webRouter);
router.use("/v1", apiRouter);

router.use(errorHandler.notFound);
router.use(errorHandler.appError);

module.exports = router;
