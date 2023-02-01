const {
  Transaction,
} = require("../models")

const getAll = async (req, res, next) => {
  try {
    const data = await Transaction.findAll()
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id
  try {
    const data = await Transaction.findByPk(id)

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
      data: data
    })
  } catch (err) {
    next(err)
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
        where: { id:id }
      }
    )

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
