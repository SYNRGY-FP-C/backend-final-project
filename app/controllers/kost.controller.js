const { Kost, Account, UserProfile } = require("../models");

const getAllKost = async (req, res, next) => {
  try {
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
      page = pageAsNumber;
    }
    let size = 10;
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10){
      size = sizeAsNumber;
    }
    const kosts = await Kost.findAll({
        attributes:['kost_name','indoor_photo_url','kost_type','city','province','address'],
        include : [
            {
                model: Account,
                as: 'account',
                required: true,
                attributes: ['id'],
                include: [
                    {
                        model: UserProfile,
                        attributes: ['fullname'],
                        as: 'profile',
                    },
                ],
            },
        ],
        limit: size,
        offset: page * size,
        raw: true,
        nest:true
    });

    const result = kosts.map((account) => ({
        kost_name: account.kost_name,
        indoor_photo_url : account.indoor_photo_url,
        kost_type :account.kost_type,
        city : account.city,
        province: account.province,
        address: account.address,
        owner: account.account.profile.fullname
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
  const { kostId } = req.params;
  try {
    const kost = await Kost.findByPk(kostId,
    {
        attributes:['kost_name','indoor_photo_url','kost_type','city','province','address'],
        include : [
            {
                model: Account,
                as: 'account',
                required: true,
                attributes: ['id'],
                include: [
                    {
                        model: UserProfile,
                        attributes: ['fullname'],
                        as: 'profile',
                    },
                ],
            },
        ],
        raw: true,
        nest:true
    });

    if (!kost) {
      return res.status(404).json({
        status: "failed",
        message: "Data not found",
      });
    }

    const result ={
        kost_name: kost.kost_name,
        indoor_photo_url : kost.indoor_photo_url,
        kost_type :kost.kost_type,
        city : kost.city,
        province: kost.province,
        address: kost.address,
        owner: kost.account.profile.fullname
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
        message: `Data ${kostId} not found!`,
      });
    }
     await Kost.destroy({
      where: {
        id: kostId,
      },
    });
   
    return res.status(200).json({
      message: `Deleted data ID ${kostId}`,
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
