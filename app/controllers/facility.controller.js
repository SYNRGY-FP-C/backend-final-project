const { KostFacility, RoomFacility } = require("../models");

const createKostFacility = async (req, res, next) => {
  const { facility_name, type } = req.body;

  try {
    if (!facility_name || !type) {
      res.status(400).json({
        status: "failed",
        message: "All fields must not be empty",
      });
      return;
    }

    const data = await KostFacility.create({
      facility_name,
      type,
    });
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const createRoomFacility = async (req, res, next) => {
  const { facility_name, type, is_active } = req.body;

  try {
    if (!facility_name || !type || is_active === null) {
      res.status(400).json({
        status: "failed",
        message: "All fields must not be empty",
      });
      return;
    }

    const data = await RoomFacility.create({
      facility_name,
      type,
      is_active,
    });
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllKostFacilities = async (req, res, next) => {
  try {
    const data = await KostFacility.findAll();
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllRoomFacilities = async (req, res, next) => {
  try {
    const data = await RoomFacility.findAll();
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const getByIdKostFacility = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await KostFacility.findByPk(id);

    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "ID is not found!",
      });
      return;
    }

    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const getByIdRoomFacility = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await RoomFacility.findByPk(id);

    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "ID is not found!",
      });
      return;
    }

    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const updateKostFacility = async (req, res, next) => {
  try {
    const { facility_name, type } = req.body;
    const id = req.params.id;

    const isIdFound = (await KostFacility.findByPk(id)) ? true : false;

    if (!isIdFound) {
      res.status(400).json({
        status: "failed",
        message: "Facility ID is not found!",
      });
      return;
    }

    if (!facility_name && !type) {
      res.status(400).json({
        status: "failed",
        message: "Facility Name or Type is required!",
      });
      return;
    }

    await KostFacility.update(
      {
        ...(facility_name && { facility_name: facility_name }),
        ...(type && { type: type }),
      },
      {
        where: { id: id },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Kost Facility has been updated",
    });
  } catch (error) {
    next(error);
  }
};

const updateRoomFacility = async (req, res, next) => {
  try {
    const { facility_name, type, is_active } = req.body;
    const id = req.params.id;

    const isIdFound = (await RoomFacility.findByPk(id)) ? true : false;

    if (!isIdFound) {
      res.status(400).json({
        status: "failed",
        message: "Facility ID is not found!",
      });
      return;
    }

    if (!facility_name && !type && is_active === null) {
      res.status(400).json({
        status: "failed",
        message: "Facility Name or Type is required!",
      });
      return;
    }

    await RoomFacility.update(
      {
        ...(facility_name && { facility_name: facility_name }),
        ...(type && { type: type }),
        ...(is_active === null && { is_active: is_active }),
      },
      {
        where: { id: id },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Room Facility has been updated",
    });
  } catch (error) {
    next(error);
  }
};

const deleteRoomFacility = async (req, res, next) => {
  try {
    const id = req.params.id;

    const isIdFound = (await RoomFacility.findByPk(id)) ? true : false;

    if (!isIdFound) {
      res.status(400).json({
        status: "failed",
        message: "Facility ID is not found!",
      });
      return;
    }

    await RoomFacility.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Room Facility has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  // Kost
  createKostFacility,
  getAllKostFacilities,
  getByIdKostFacility,
  updateKostFacility,
  // Room
  createRoomFacility,
  getAllRoomFacilities,
  getByIdRoomFacility,
  updateRoomFacility,
  deleteRoomFacility,
};
