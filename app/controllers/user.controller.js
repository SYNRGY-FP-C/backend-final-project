const { Account, OTP, AccountRoles } = require("../models");
const { generateOTP } = require("../../utils/generator");

const getAll = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    const code = generateOTP();
    const account = await Account.findOne({
      where: {
        ...(email && { email: email }),
        ...(phone && { phone: phone }),
      },
      attributes: ["id"],
    });

    const otpExists = await OTP.findOne({
      where: {
        account_id: account.id,
      },
    });
    await otpExists.destroy();
    // await OTP.create({
    //   id: 1,
    //   token: code,
    //   account_id: account.id,
    // });
    res.status(200).json({
      status: 200,
      message: "OK",
      data: {
        account,
        otpExists,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
