const { Kost, Account, UserProfile } = require("../models");

const getAllKost = async (req, res, next) => {
  try {
    const { page = 1, size = 30 } = req.query;
    const kosts = await Kost.findAll({
      attributes: [
        "id",
        "kost_name",
        "indoor_photo_url",
        "kost_type",
        "city",
        "province",
        "address",
      ],
      include: [
        {
          model: Account,
          as: "account",
          required: true,
          attributes: ["id"],
          include: [
            {
              model: UserProfile,
              attributes: ["fullname"],
              as: "profile",
            },
          ],
        },
      ],
      limit: Number(size),
      offset: (Number(page) - 1) * Number(size),
      raw: true,
      nest: true,
    });

    const result = kosts.map((kost) => ({
      id: kost.id,
      kost_name: kost.kost_name,
      indoor_photo_url: kost.indoor_photo_url,
      kost_type: kost.kost_type,
      city: kost.city,
      province: kost.province,
      address: kost.address,
      owner: kost.account.profile.fullname,
    }));
    return res.status(200).json({
      status: "success",
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getByIdKost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const kost = await Kost.findByPk(id, {
      attributes: [
        "id",
        "kost_name",
        "indoor_photo_url",
        "kost_type",
        "city",
        "province",
        "address",
      ],
      include: [
        {
          model: Account,
          as: "account",
          required: true,
          attributes: ["id"],
          include: [
            {
              model: UserProfile,
              attributes: ["fullname"],
              as: "profile",
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    });

    if (!kost) {
      return res.status(404).json({
        status: "failed",
        message: "Data not found",
      });
    }

    const result = {
      id: kost.id,
      kost_name: kost.kost_name,
      indoor_photo_url: kost.indoor_photo_url,
      kost_type: kost.kost_type,
      city: kost.city,
      province: kost.province,
      address: kost.address,
      owner: kost.account.profile.fullname,
    };

    return res.status(200).json({
      status: "success",
      message: "OK",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteKosts = async (req, res, next) => {
  try {
    const { kostId } = req.params;
    if (!kostId) {
      return res.status(404).json({
        status: "failed",
        message: "Kost not found",
      });
    }
    await Kost.destroy({
      where: {
        id: kostId,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Kost deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllKost,
  getByIdKost,
  deleteKosts,
};
