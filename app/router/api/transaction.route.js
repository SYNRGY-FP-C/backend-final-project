const express = require("express");
const TransactionController = require("../../controllers/transaction.controller");

const router = express.Router();

router.get("/", TransactionController.getAll);
router.get("/:id", TransactionController.getById);
router.put("/:id", TransactionController.updateStatusById);

module.exports = router;
