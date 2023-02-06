const express = require("express");
const RoomController = require("../../controllers/room.controller");

const router = express.Router();

//Kamar
router.get("/", RoomController.getAllRooms);
router.post("/", RoomController.storeRooms);
router.get("/:roomId", RoomController.getByIdRooms);
router.put("/:roomId", RoomController.UpdateRooms);
router.delete("/:roomId", RoomController.deleteRooms);

module.exports = router;
