"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ConfirmationToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConfirmationToken.init(
    {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      expiresAt: DataTypes.DATE,
      confirmedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ConfirmationToken",
    }
  );
  return ConfirmationToken;
};
