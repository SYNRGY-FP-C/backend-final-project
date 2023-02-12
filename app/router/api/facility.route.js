const express = require("express");
const FacilityController = require("../../controllers/facility.controller");
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
  FacilityController.getAllRoomFacilities
);
router.get(
  "/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction
    ? isAuthorized([ROLE_SUPERADMIN, ROLE_ADMIN])
    : (req, res, next) => next(),
  FacilityController.getByIdRoomFacility
);

router.post(
  "/",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  FacilityController.createRoomFacility
);

router.put(
  "/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  FacilityController.updateRoomFacility
);

router.delete(
  "/:id",
  isProduction ? isAuthenticated : (req, res, next) => next(),
  isProduction ? isAuthorized([ROLE_SUPERADMIN]) : (req, res, next) => next(),
  FacilityController.deleteRoomFacility
);

module.exports = router;
