"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomKostFacilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoomKostFacilities.init(
    {
      room_kost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      room_facilities_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "RoomKostFacilities",
      tableName: "room_kost_facilities",
      timestamps:false,
      
    }
  );
  RoomKostFacilities.removeAttribute('id')
  return RoomKostFacilities;
};
