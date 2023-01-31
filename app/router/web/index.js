const { getRounds } = require("bcrypt");
const express = require("express");

const router = express.Router();

const {
  Account,
  AccountRoles,
  KostFacilities,
  KostPaymentScheme,
  Roles,
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

const getAllKostPaymentScheme = async (req,res, next) => {
  try {
    const data = await KostPaymentScheme.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAllRoles = async (req,res, next) => {
  try {
    const data = await Roles.findAll()
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
router.get("/getallkostpaymentscheme", (getAllKostPaymentScheme));
router.get("/getallroles", (getAllRoles));

module.exports = router;
