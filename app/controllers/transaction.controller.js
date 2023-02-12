const { Transaction, Account, UserProfile } = require("../models");

const getAll = async (req, res, next) => {
  try {
    const { page = 1, size = 30 } = req.query;
    const data = await Transaction.findAll({
      order: [["created_date", "DESC"]],
      limit: Number(size),
      offset: (Number(page) - 1) * Number(size),
    });
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await Transaction.findByPk(id, {
      include: [
        {
          model: Account,
          as: "account",
          attributes: ["id"],
          include: [
            {
              model: UserProfile,
              as: "profile",
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    });

    if (!data) {
      res.status(404).json({
        status: "failed",
        message: "ID is not found!",
      });
      return;
    }

    return res.status(200).json({
      status: "success",
      message: "OK",
      data: {
        id: data.id,
        name: data.account.profile.fullname,
        status: data.status,
        price: data.price,
        payment_scheme: data.payment_scheme,
        payment_proof: data.payment_proof,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateStatusById = async (req, res, next) => {
  try {
    const { status } = req.body;
    const id = req.params.id;

    if (!status) {
      res.status(400).json({
        status: "failed",
        message: "Status is required!",
      });
      return;
    }
    await Transaction.update(
      {
        status,
      },
      {
        where: { id: id },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Transaction status is updated",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  updateStatusById,
};
