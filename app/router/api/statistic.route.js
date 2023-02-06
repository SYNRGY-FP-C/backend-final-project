const express = require("express");
const StatisticController = require("../../controllers/statistic.controller");

const router = express.Router();

router.get("/", StatisticController.getAll);

module.exports = router;
