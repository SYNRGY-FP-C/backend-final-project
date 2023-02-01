
const request = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    const code = "1234";

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

    if (phone && !email) {
      await whatsappService.sendMessage(phone, code);
    }

    if (!phone && email) {
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
  request,
  verify,
};
