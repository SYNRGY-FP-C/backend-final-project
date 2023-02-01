const { getRounds } = require("bcrypt");
const express = require("express");

const router = express.Router();

const {
  Account,
  AccountRoles,
  KostFacilities,
  KostPaymentSchemes,
  KostRules,
  Role,
  RoomImage,
  RoomKostFacilities,
  AdditionalRoomFacility,
} = require("../../models")

const getAllAccount = async (req,res, next) => {
  try {
    const data = await Account.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllAccountRoles = async (req,res, next) => {
  try {
    const data = await AccountRoles.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllKostFacilities = async (req,res, next) => {
  try {
    const data = await KostFacilities.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllKostPaymentSchemes = async (req,res, next) => {
  try {
    const data = await KostPaymentSchemes.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllKostRules = async (req,res, next) => {
  try {
    const data = await KostRules.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllRole = async (req,res, next) => {
  try {
    const data = await Role.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllRoomImage = async (req,res, next) => {
  try {
    const data = await RoomImage.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllRoomKostFacilities = async (req,res, next) => {
  try {
    const data = await RoomKostFacilities.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllAdditionalRoomFacility = async (req,res, next) => {
  try {
    const data = await AdditionalRoomFacility.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

router.get("/getallaccount", (getAllAccount));
router.get("/getallaccountroles", (getAllAccountRoles));
router.get("/getallkostfacilities", (getAllKostFacilities));
router.get("/getallkostpaymentschemes", (getAllKostPaymentSchemes));
router.get("/getallkostrules", (getAllKostRules));
router.get("/getallrole", (getAllRole));
router.get("/getallroomimage", (getAllRoomImage));
router.get("/getallroomkostfacilities", (getAllRoomKostFacilities));
router.get("/getalladditionalroomfacility", (getAllAdditionalRoomFacility));

module.exports = router;
