const verificationController = require("../../controllers/verificationController");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello to the API",
  });
});

router.post("/verify/request", verificationController.request);
router.post("/verify", verificationController.verify);

module.exports = router;
