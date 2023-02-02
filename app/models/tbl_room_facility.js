"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoomFacility.init(
    {
      facility_name: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RoomFacility",
      tableName: "tbl_room_facility",
      timestamps:false,
    }
  );
  return RoomFacility;
};
