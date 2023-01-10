const whatsappService = require("../services/whatsapp.service");
const emailService = require("../services/email.service");

const request = async (req, res, next) => {
  try {
    const { email, phone_number } = req.body;
    const code = "1234";

    if (!phone_number && !email) {
      res.status(404).json({ message: "Bad Request" });
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

    if ((!phone_number && !email) || !code || code != valid_code) {
      res.status(404).json({ message: "Bad Request" });
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
