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
    }
  }
  AccountRoles.init(
    {
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "AccountRoles",
      tableName: "account_roles",
      timestamps:false,
      
    }
  );
  AccountRoles.removeAttribute('id')
  return AccountRoles;
};
