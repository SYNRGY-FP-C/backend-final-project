"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AccountRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasOne(models.Account, {
      //   foreignKey: "account_id",
      // });
      // this.hasOne(models.Role, {
      //   foreignKey: "role_id",
      // });
    }
  }
  AccountRoles.init(
    {},
    {
      sequelize,
      modelName: "AccountRoles",
      tableName: "account_roles",
      timestamps: false,
    }
  );
  return AccountRoles;
};
