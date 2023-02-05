"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KostFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KostFacility.init(
    {
      facility_name: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "KostFacility",
      tableName: "tbl_kost_facility",
      timestamps:false,
    }
  );
  return KostFacility;
};
