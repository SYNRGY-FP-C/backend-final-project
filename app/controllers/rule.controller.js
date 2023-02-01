const { Rule } = require("../models")

const create = async (req, res, next) => {
  const { description, rule } = req.body;

  try {

    if (!description || !rule) {
      res.status(400).json({
        status: "failed",
        message: "All fields must not be empty",
      });
      return;
    }

    const data = await Rule.create({
      description,
      rule
    })
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: data
    })
  } catch (err) {
    next(err)
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await Rule.findAll()
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
    const data = await Rule.findByPk(id)

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

const update = async (req, res, next) => {
  try {
    const { description, rule } = req.body;
    const id = req.params.id;

    if (!description && !rule) {
      res.status(400).json({
        status: "failed",
        message: "Description or Rule/RuleName is required!",
      });
      return;
    }

    await Rule.update(
      {
        ...(description && {description:description}),
        ...(rule && {rule:rule}),
      },
      {
        where: { id:id }
      }
    )

    res.status(200).json({
      status: "success",
      message: "Rule has been updated",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
