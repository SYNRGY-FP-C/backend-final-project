const VerificationController = require("../../controllers/verification.controller");
const UserController = require("../../controllers/user.controller");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello to the API",
  });
});

router.post("/verify/request", VerificationController.request);
router.post("/verify", VerificationController.verify);

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getById);

module.exports = router;
