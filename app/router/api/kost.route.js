const express = require("express");
const KostController = require("../../controllers/kost.controller");

const router = express.Router();

router.get("/", KostController.getAllKost);
router.get("/:id", KostController.getByIdKost);
router.delete("/:id", KostController.deleteKosts);

module.exports = router;
