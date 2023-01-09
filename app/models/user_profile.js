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
    }
  }
  UserProfile.init(
    {
      fullname: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      address: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      job: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
      documentUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserProfile",
    }
  );
  return UserProfile;
};
