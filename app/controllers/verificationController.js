const whatsappService = require("../services/whatsapp.service");

const request = async (req, res, next) => {
  try {
    const { email, phone_number } = req.body;
    const code = "1234";

    if (!phone_number) {
      res.status(404).json({ message: "Bad Request" });
      return;
    }

    if (phone_number && !email)
      await whatsappService.sendMessage(phone_number, code);

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
    } else if (code != valid_code) {
      res.status(422).json({ message: "Not Processed" });
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
