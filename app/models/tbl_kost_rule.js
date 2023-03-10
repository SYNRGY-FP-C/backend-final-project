/* eslint-disable unused-imports/no-unused-vars */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rule.init(
    {
      description: DataTypes.STRING,
      rule: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rule",
      tableName: "tbl_kost_rule",
      timestamps: false,
    }
  );
  return Rule;
};
