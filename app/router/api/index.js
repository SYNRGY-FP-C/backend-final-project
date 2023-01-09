const verificationController  = require("../../controllers/verificationController");

const express = require("express");

const router = express.Router();

<<<<<<< HEAD
router.get("/", (req, res) => {
  res.json({
    message: "Hello to the API",
  });
});
=======

router.post("/verify/request", verificationController.request);
>>>>>>> 9c3acf18e46a838ebe6e96a0cab07db1fcbbf4fd

module.exports = router;
