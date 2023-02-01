const whatsappService = require("../services/whatsapp.service");
const emailService = require("../services/email.service");
const validation = require("../../utils/validation");
const { generateOTP } = require("../../utils/generator");
const { Account, OTP } = require("../models");
const { encrypt, verifyHash } = require("../../utils/bcrypt");

const request = async (req, res, next) => {
  try {
    const { email, phone } = req.body;

    if (!email && !phone) {
      res.status(400).json({
        status: "failed",
        message: "Email or phone number required",
      });
      return;
    }

    if (email && phone) {
      res.status(400).json({
        status: "failed",
        message: "Must be email or phone number",
      });
      return;
    }

    if (email && !validation.validateEmail(email)) {
      res.status(400).json({
        status: "failed",
        message: "Must be a valid email",
      });
      return;
    }
    const code = generateOTP();

    const account = await Account.findOne({
      where: {
        ...(email && { email: email }),
        ...(phone && { phone: phone }),
      },
      attributes: ["id"],
    });

    if (!account) {
      res.status(404).json({
        status: "failed",
        message: "Account not found",
      });
      return;
    }

    const otpExists = await OTP.findOne({
      where: {
        account_id: account.id,
      },
    });

    if (otpExists?.confirmed_at) {
      res.status(422).json({
        status: "failed",
        message: "Account already confirmed",
      });
      return;
    }

    if (otpExists) {
      await otpExists.destroy();
    }

    console.log("otpExists");
    await OTP.create({
      token: encrypt(code),
      account_id: account.id,
    });
    console.log("otpExists");

    if (phone && !email) {
      await whatsappService.sendMessage(phone, code);
    }

    if (!phone && email) {
      await emailService.sendEmail(email, code);
    }

    res.status(200).json({
      status: "success",
      message: "Verification code has been sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

const verify = async (req, res, next) => {
  try {
    const { email, phone, code } = req.body;

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

    const account = await Account.findOne({
      where: {
        ...(email && { email: email }),
        ...(phone && { phone: phone }),
      },
      attributes: ["id"],
    });

    if (!account) {
      res.status(404).json({
        status: "failed",
        message: "Account not found",
      });
      return;
    }

    const otp = await OTP.findOne({
      where: {
        account_id: account.id,
      },
    });

    if (otp.confirmed_at) {
      res.status(422).json({
        status: "failed",
        message: "Account already verified",
      });
      return;
    }

    const isValid = verifyHash(code, otp.token);
    if (!isValid) {
      res.status(400).json({
        status: "failed",
        message: "Invalid code",
      });
      return;
    }

    await account.update({
      verified: true,
    });

    await otp.update({
      confirmed_at: new Date(),
    });

    res.status(200).json({
      status: "success",
      message: "Verification succeed",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  request,
  verify,
};
