const bcrypt = require("bcrypt");
const { Account } = require("../models");
const { generateToken } = require("../../utils/jwt");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const accountByEmail = await Account.findOne({ where: { email: email } });
    if (!accountByEmail) {
      return res
        .status(404)
        .json({ status: "failed", message: "Account not found" });
    }
    const checkAccountPassword = await bcrypt.compare(
      password,
      accountByEmail.password
    );
    if (checkAccountPassword == false) {
      return res
        .status(401)
        .json({ status: "failed", message: "Email or password not match" });
    }
    const generatedToken = generateToken({
      sub: accountByEmail.email,
    });
    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      data: { accessToken: generatedToken },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
