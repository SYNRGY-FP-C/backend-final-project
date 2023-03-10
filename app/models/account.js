"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.OTP, {
        foreignKey: "account_id",
        as: "otp",
      });
      this.hasOne(models.AccountRoles, {
        foreignKey: "account_id",
        as: "account_role",
      });
      this.hasOne(models.UserProfile, {
        foreignKey: "id",
        as: "profile",
      });
    }
  }
  Account.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Account",
      tableName: "account",
      timestamps: false,
    }
  );
  return Account;
};
