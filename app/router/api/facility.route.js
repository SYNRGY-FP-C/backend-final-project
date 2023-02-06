const express = require("express");
const FacilityController = require("../../controllers/facility.controller");

const router = express.Router();

router.get("/", FacilityController.getAllKostFacilities);

module.exports = router;
