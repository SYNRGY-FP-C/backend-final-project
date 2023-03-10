/* eslint-disable unused-imports/no-unused-vars */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.AccountRoles, {
      //   as: "role",
      //   foreignKey: "id",
      // });
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "role",
      timestamps: false,
    }
  );
  return Role;
};
