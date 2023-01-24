const models = require("../models");
const Room = models.Room;

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.findAll();
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: rooms,
    });
  } catch (error) {
    next(error);
  }
};
const storeRooms = async (req, res, next) => {
  try {
    const {
      // rating_id,
      // facillity_id,
      // price_per_category,
      // room_image_id,
      // thumbnail_id,
      owner_id,
      kost_id,
      price,
      name,
      description,
      room_number,
      capacity,
      width,
      length,
      quantity,
      available_room,
      is_available,
      indoor_bathroom,
      is_deleted,
    } = req.body;

    if (
      !owner_id ||
      !kost_id ||
      !price ||
      !name ||
      !description ||
      !room_number ||
      !capacity ||
      !width ||
      !length ||
      !quantity ||
      !available_room ||
      !is_available ||
      !indoor_bathroom ||
      is_deleted
    ) {
      return res.status(400).json({
        message: "Must be completed form data!",
      });
    }

    const rooms = await Room.create({
      owner_id: owner_id,
      kost_id: kost_id,
      price: price,
      name: name,
      description: description,
      room_number: room_number,
      capacity: capacity,
      width: width,
      length: length,
      quantity: quantity,
      available_room: available_room,
      is_available: is_available,
      indoor_bathroom: indoor_bathroom,
      is_deleted: is_deleted,
      created_date: new Date(),
    });

    return res.status(201).json({
      message: "Success created Room",
      data: rooms,
    });
  } catch (error) {
   next(error);
  }
};
const getByIdRooms = async (req, res, next) => {
  const { roomId } = req.params;
  try {
    const room = await Room.findByPk(roomId);

    if (!room) {
      return res.status(404).json({
        status: "failed",
        message: "Data not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: room,
    });
  } catch (error) {
    next(error);
  }
};
const UpdateRooms = async (req, res) => {
  try {
    const { roomId } = req.params;
    if (!roomId) {
      return res.status(404).json({
        message: `Data ${roomId} not found!`,
      });
    }
    const {
      // rating_id,
      // facillity_id,
      // price_per_category,
      // room_image_id,
      // thumbnail_id,
      owner_id,
      kost_id,
      price,
      name,
      description,
      room_number,
      capacity,
      width,
      length,
      quantity,
      available_room,
      is_available,
      indoor_bathroom,
      is_deleted,
    } = req.body;

    if (
      !owner_id &&
      !kost_id &&
      !price &&
      !name &&
      !description &&
      !room_number &&
      !capacity &&
      !width &&
      !length &&
      !quantity &&
      !available_room &&
      !is_available &&
      !indoor_bathroom &&
      !is_deleted
    ) {
      return res.status(400).json({
        message: "Must be fill form data!",
      });
    }

    await Room.update(
      {
        owner_id: owner_id,
        kost_id: kost_id,
        price: price,
        name: name,
        description: description,
        room_number: room_number,
        capacity: capacity,
        width: width,
        length: length,
        quantity: quantity,
        available_room: available_room,
        is_available: is_available,
        indoor_bathroom: indoor_bathroom,
        is_deleted: is_deleted,
        updated_date: new Date(),
      },
      {
        where: {
          id: roomId,
        },
      }
    );
    return res.status(200).json({
      message: `Success update data ID ${roomId}`,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
const deleteRooms = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    if (!roomId) {
      return res.status(404).json({
        message: `Data ${roomId} not found!`,
      });
    }
    await Room.delete({
      where: {
        id: roomId,
      },
    });
    return res.status(200).json({
      message: `Deleted data ID ${roomId}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRooms,
  storeRooms,
  getByIdRooms,
  UpdateRooms,
  deleteRooms,
};
