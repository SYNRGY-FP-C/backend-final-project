const whatsappService = require("../services/whatsapp.service");
const emailService = require("../services/email.service");
const validation = require("../../utils/validation");

const request = async (req, res, next) => {
  try {
    const { email, phone_number } = req.body;
    const code = "1234";

    if (!email && !phone_number) {
      res.status(400).json({
        message: "Email or phone number required",
      });
      return;
    }

    if (email && phone_number) {
      res.status(400).json({
        message: "Must be email or phone number",
      });
      return;
    }

    if (!validation.validateEmail(email)) {
      res.status(400).json({
        message: "Must be a valid email",
      });
      return;
    }

    if (phone_number && !email)
      await whatsappService.sendMessage(phone_number, code);

    if (!phone_number && email) await emailService.sendEmail(email, code);

    res.status(200).json({
      code: 200,
      status: "success",
      message: "Code sent successfully",
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

    console.log(email, code);

    if ((!phone_number && !email) || !code) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }
    if (code != valid_code) {
      res.status(422).json({ message: "Invalid Code" });
      return;
    }

    res.status(200).json({
      code: 200,
      status: "success",
      message: "Code is correct",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  request,
  verify,
};
