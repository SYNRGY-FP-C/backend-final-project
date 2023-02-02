const VerificationController = require("../../controllers/verification.controller");
const UserController = require("../../controllers/user.controller");
const StatisticController = require("../../controllers/statistic.controller");
const {
  isAuthorized,
  isAuthenticated,
} = require("../../middlewares/auth.middleware");
const { ROLE_SUPERADMIN, ROLE_ADMIN } = require("../../../constants/roles");

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
  isAuthenticated,
  isAuthorized([ROLE_SUPERADMIN]),
  UserController.getAll
);
router.get(
  "/users/:id",
  isAuthenticated,
  isAuthorized([ROLE_SUPERADMIN]),
  UserController.getById
);

router.get(
  "/statistic/",
  isAuthenticated,
  isAuthorized([ROLE_ADMIN]),
  StatisticController.getAll
);
router.get(
  "/statistic/owner",
  isAuthenticated,
  isAuthorized([ROLE_ADMIN]),
  StatisticController.getAll
);

module.exports = router;
