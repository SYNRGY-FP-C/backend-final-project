"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KostRules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KostRules.init(
    {
      kost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "KostRules",
      tableName: "kost_rules",
      timestamps:false
    }
  );
  KostRules.removeAttribute('id')
  return KostRules;
};
