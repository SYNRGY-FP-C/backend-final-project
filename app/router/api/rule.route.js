const express = require("express");
const RuleController = require("../../controllers/rule.controller");
const { ROLE_SUPERADMIN, ROLE_ADMIN } = require("../../../constants/roles");
const {
  isAuthorized,
  isAuthenticated,
} = require("../../middlewares/auth.middleware");
const isProduction = process.env.NODE_ENV === "production";

const router = express.Router();

router.get(
  "/",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction
    ? isAuthorized([ROLE_SUPERADMIN, ROLE_ADMIN])
    : (req, res, next) => next(),
  RuleController.getAll
);
router.get(
  "/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction
    ? isAuthorized([ROLE_SUPERADMIN, ROLE_ADMIN])
    : (req, res, next) => next(),
  RuleController.getById
);

router.post(
  "/",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  RuleController.create
);

router.put(
  "/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  RuleController.update
);

router.delete(
  "/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  RuleController.remove
);

module.exports = router;
