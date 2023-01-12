const whatsappService = require("../services/whatsapp.service");
const emailService = require("../services/email.service");
const validation = require("../../utils/validation");

const request = async (req, res, next) => {
  try {
    const { email, phone_number } = req.body;
    const code = "1234";

    if (!email && !phone_number) {
      res.status(400).json({
        status: "failed",
        message: "Email or phone number required",
      });
      return;
    }

    if (email && phone_number) {
      res.status(400).json({
        status: "failed",
        message: "Must be email or phone number",
      });
      return;
    }

    if (phone_number && !email) {
      await whatsappService.sendMessage(phone_number, code);
    }

    if (!phone_number && email) {
      if (!validation.validateEmail(email)) {
        res.status(400).json({
          status: "failed",
          message: "Must be a valid email",
        });
        return;
      }
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
    const { email, phone_number, code } = req.body;
    // const code = "1234";
    const valid_code = "1234";

    if (!phone_number && !email) {
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
  request,
  verify,
};
