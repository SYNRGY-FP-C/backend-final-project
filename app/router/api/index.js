const VerificationController = require("../../controllers/verification.controller");
const UserController = require("../../controllers/user.controller");
const RoomController = require('../../controllers/room.controller');

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

//Kamar
router.get('/rooms', RoomController.getAllRooms);
router.post('/rooms', RoomController.storeRooms);
router.get('/rooms/:roomId', RoomController.getByIdRooms);
router.put('/rooms/:roomId', RoomController.UpdateRooms);
router.delete('/rooms/:roomId', RoomController.deleteRooms);

module.exports = router;
