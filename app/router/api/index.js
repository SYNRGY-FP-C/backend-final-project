const VerificationController = require("../../controllers/verification.controller");
const UserController = require("../../controllers/user.controller");
const Transaction = require("../../controllers/transaction.controller");

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

router.get("/transactions", Transaction.getAll);

module.exports = router;
