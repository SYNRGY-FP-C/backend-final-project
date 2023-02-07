const express = require("express");
const RuleController = require("../../controllers/rule.controller");

const router = express.Router();

router.post("/", RuleController.create);
router.put("/:id", RuleController.update);
router.get("/", RuleController.getAll);
router.get("/:id", RuleController.getById);

module.exports = router;
