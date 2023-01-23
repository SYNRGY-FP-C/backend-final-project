"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Account, {
        foreignKey: "account_id",
        as: "profile",
      });
    }
  }
  UserProfile.init(
    {
      fullname: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth_date: DataTypes.DATE,
      address: DataTypes.STRING,
      photo_url: DataTypes.STRING,
      occupation: DataTypes.STRING,
      created_date: DataTypes.DATE,
      is_deleted: DataTypes.BOOLEAN,
      updated_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserProfile",
      tableName: "tbl_user_profile",
      timestamps: false,
    }
  );
  return UserProfile;
};
