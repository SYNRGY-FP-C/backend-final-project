"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KostFacilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KostFacilities.init(
    {
      kost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      kost_facility_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "KostFacilities",
      tableName: "kost_facilities",
      timestamps:false
    }
  );
  KostFacilities.removeAttribute('id')
  return KostFacilities;
};
