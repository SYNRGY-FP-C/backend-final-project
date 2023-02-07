const express = require("express");
const VerificationController = require("../../controllers/verification.controller");

const router = express.Router();

router.post("/request", VerificationController.request);
router.post("/", VerificationController.verify);

module.exports = router;
