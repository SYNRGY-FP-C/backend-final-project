const VerificationController = require("../../controllers/verification.controller");
const UserController = require("../../controllers/user.controller");
const StatisticController = require("../../controllers/statistic.controller");
const TransactionController = require("../../controllers/transaction.controller");

const {
  isAuthorized,
  isAuthenticated,
} = require("../../middlewares/auth.middleware");
const { ROLE_SUPERADMIN, ROLE_ADMIN } = require("../../../constants/roles");

const isProduction = process.env.NODE_ENV === "production";

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello to the API",
  });
});

router.post("/verify/request", VerificationController.request);
router.post("/verify", VerificationController.verify);

router.get(
  "/users",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  UserController.getAll
);
router.get(
  "/users/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  UserController.getById
);

router.get(
  "/statistic/",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  StatisticController.getAll
);
router.get(
  "/statistic/owner",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  StatisticController.getAll
);

router.get(
  "/transactions",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  TransactionController.getAll
);
router.get(
  "/transactions/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  TransactionController.getById
);
router.put(
  "/transactions/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  TransactionController.updateStatusById
);

module.exports = router;
