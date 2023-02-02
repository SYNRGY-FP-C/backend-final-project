const VerificationController = require("../../controllers/verification.controller");
const UserController = require("../../controllers/user.controller");
const TransactionController = require("../../controllers/transaction.controller");
const RuleController = require("../../controllers/rule.controller");
const FacilityController = require("../../controllers/facility.controller");

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

router.get("/transactions", TransactionController.getAll);
router.get("/transactions/:id", TransactionController.getById);
router.put("/transactions/:id", TransactionController.updateStatusById);

router.post("/rules", RuleController.create);
router.get("/rules", RuleController.getAll);
router.get("/rules/:id", RuleController.getById);
router.put("/rules/:id", RuleController.update);

// Facility
// Kost
router.post("/facilities/kost", FacilityController.createKostFacility);
router.get("/facilities/kost", FacilityController.getAllKostFacilities);
router.get("/facilities/kost/:id", FacilityController.getByIdKostFacility);
router.put("/facilities/kost/:id", FacilityController.updateKostFacility);
// Room
router.post("/facilities/room", FacilityController.createRoomFacility);
router.get("/facilities/room", FacilityController.getAllRoomFacilities);
router.get("/facilities/room/:id", FacilityController.getByIdRoomFacility);
router.put("/facilities/room/:id", FacilityController.updateRoomFacility);

module.exports = router;
