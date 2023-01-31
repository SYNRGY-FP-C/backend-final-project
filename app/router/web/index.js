const { getRounds } = require("bcrypt");
const express = require("express");

const router = express.Router();

const {
  Account,
  AccountRoles,
  KostFacilities,
  KostPaymentSchemes,
  Role,
} = require("../../models")

const getAllAccount = async (req,res, next) => {
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

router.get("/getallaccount", (getAllAccount));
router.get("/getallaccountroles", (getAllAccountRoles));
router.get("/getallkostfacilities", (getAllKostFacilities));
router.get("/getallkostpaymentschemes", (getAllKostPaymentSchemes));
router.get("/getallrole", (getAllRole));

module.exports = router;
