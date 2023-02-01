const {
  Transaction
} = require("../models")

const getAll = async (req, res, next) => {
  try {
    const data = await Transaction.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
};

const verify = async (req, res, next) => {
  try {
    const { email, phone, code } = req.body;
    // const code = "1234";
    const valid_code = "1234";

    if (!phone && !email) {
      res.status(400).json({
        status: "failed",
        message: "Email or phone number required",
      });
      return;
    }

    if (!code) {
      res.status(400).json({
        status: "failed",
        message: "Verification code required",
      });
      return;
    }

    if (code != valid_code) {
      res.status(400).json({
        status: "failed",
        message: "Invalid code",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      message: "Verification succeed",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  verify,
};
