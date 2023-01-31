const { getRounds } = require("bcrypt");
const express = require("express");

const router = express.Router();

const {Account, AccountRoles} = require("../../models")

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

router.get("/getallaccount", (getAllAccount));
router.get("/getallaccountroles", (getAllAccountRoles));

module.exports = router;
