const { Account, Role, AccountRoles, UserProfile } = require("../models");

const getAll = async (req, res, next) => {
  try {
    const { page, size } = req.query;
    const users = await Account.findAll({
      attributes: ["id", "email", "phone"],
      include: [
        {
          model: AccountRoles,
          required: true,
          as: "account_role",
          attributes: ["role_id"],
          include: [
            {
              model: Role,
              attributes: ["name"],
              as: "role",
            },
          ],
        },
        {
          model: UserProfile,
          as: "profile",
          attributes: [
            "fullname",
            "gender",
            "birth_date",
            "address",
            "photo_url",
            "occupation",
          ],
        },
      ],
      limit: size,
      offset: page * size,
      raw: true,
      nest: true,
    });

    const result = users.map((account) => ({
      id: account.id,
      email: account.email,
      phone: account.phone,
      role: account.account_role.role.name,
      fullname: account.profile.fullname,
      gender: account.profile.gender,
      birth_date: account.profile.birth_date,
      address: account.profile.address,
      photo_url: account.profile.photo_url,
      occupation: account.profile.occupation,
    }));

    res.status(200).json({
      status: "success",
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const account = await Account.findByPk(id, {
      attributes: ["id", "email", "phone"],
      include: [
        {
          model: AccountRoles,
          required: true,
          as: "account_role",
          attributes: ["role_id"],
          include: [
            {
              model: Role,
              attributes: ["name"],
              as: "role",
            },
          ],
        },
        {
          model: UserProfile,
          as: "profile",
          attributes: [
            "fullname",
            "gender",
            "birth_date",
            "address",
            "photo_url",
            "occupation",
          ],
        },
      ],
      raw: true,
      nest: true,
    });

    if (!account) {
      res.status(404).json({
        status: "failed",
        message: "Account not found",
      });
      return;
    }

    const result = {
      id: account.id,
      email: account.email,
      phone: account.phone,
      role: account.account_role.role.name,
      fullname: account.profile.fullname,
      gender: account.profile.gender,
      birth_date: account.profile.birth_date,
      address: account.profile.address,
      photo_url: account.profile.photo_url,
      occupation: account.profile.occupation,
    };

    res.status(200).json({
      status: "success",
      message: "OK",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
};
