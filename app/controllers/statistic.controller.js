const { Account } = require("../models");

const getAll = async (req, res, next) => {
  try {
    const users = await Account.count();
    // const users = await Account.count();
    // const users = await Account.count();
    // const users = await Account.count();

    const result = {
      users: users,
      // flats:,
      // rooms:,
      // transactions:,
    };

    res.status(200).json({
      status: "success",
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
