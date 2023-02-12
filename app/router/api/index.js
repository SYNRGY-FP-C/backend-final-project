const express = require("express");
const facilityRoute = require("./facility.route");
const kostRoute = require("./kost.route");
const roomRoute = require("./room.route");
const ruleRoute = require("./rule.route");
const statisticRoute = require("./statistic.route");
const transactionRoute = require("./transaction.route");
const userRoute = require("./user.route");
const verificationRoute = require("./verification.route");

const {
  isAuthorized,
  isAuthenticated,
} = require("../../middlewares/auth.middleware");
const { ROLE_SUPERADMIN } = require("../../../constants/roles");

const isProduction = process.env.NODE_ENV === "production";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello to the API",
  });
});

router.use("/facilities", facilityRoute);

router.use("/rules", ruleRoute);

router.use(
  "/kost",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  kostRoute
);

router.use(
  "/rooms",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  roomRoute
);

router.use(
  "/statistics",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  statisticRoute
);

router.use(
  "/transactions",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  transactionRoute
);

router.use(
  "/users",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  userRoute
);

router.use("/verify", verificationRoute);

module.exports = router;
