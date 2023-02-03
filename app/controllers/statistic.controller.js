const { Account, Kost, Transaction, Room } = require("../models");

const getAll = async (req, res, next) => {
  try {
    const users = await Account.count();
    const kosts = await Kost.count();
    const rooms = await Room.count();
    const transactions = await Transaction.count();

    const result = {
      users: users,
      kosts: kosts,
      rooms: rooms,
      transactions: transactions,
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
