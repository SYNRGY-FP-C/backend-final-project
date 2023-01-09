const verificationController  = require("../../controllers/verificationController");

const express = require("express");

const router = express.Router();


router.post("/verify/request", verificationController.request);

module.exports = router;
