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
      this.belongsTo(models.Account, {
        foreignKey: "account_id",
      });
      this.belongsTo(models.Role, {
        foreignKey: "role_id",
        as: "role",
      });
    }
  }
  AccountRoles.init(
    {
      account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "AccountRoles",
      tableName: "account_roles",
      timestamps: false,
    }
  );
  return AccountRoles;
};
