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
      this.belongsTo(models.Account, {
        foreignKey: "account_id",
      });
    }
  }
  ConfirmationToken.init(
    {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now() + 300 * 1000,
      },
      confirmed_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "OTP",
      tableName: "tbl_confirmation_token",
      timestamps: false,
    }
  );
  return ConfirmationToken;
};
