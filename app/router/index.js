const express = require("express");
const errorHandler = require("../middlewares/error.middleware");

const apiRouter = require("./api");
const webRouter = require("./web");
const mockAPI = require("./mock");

const router = express.Router();

// if (process.env.NODE_ENV === "production") {
//   router.use(isAuthenticated);
//   router.use(isAuthorized([ROLE_SUPERADMIN]));
// }

router.use(mockAPI);
router.use(webRouter);
router.use("/v1", apiRouter);

router.use(errorHandler.notFound);
router.use(errorHandler.appError);

module.exports = router;
