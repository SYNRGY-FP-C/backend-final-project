const express = require("express");
const FacilityController = require("../../controllers/facility.controller");

const router = express.Router();

router.get("/", FacilityController.getAllRoomFacilities);
router.get("/:id", FacilityController.getByIdRoomFacility);

module.exports = router;
