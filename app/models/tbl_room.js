"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init(
    {
      is_deleted: DataTypes.BOOLEAN,
      available_room: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      description: DataTypes.STRING,
      indoor_bathroom: DataTypes.BOOLEAN,
      is_available: DataTypes.BOOLEAN,
      length: DataTypes.FLOAT,
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      room_number: DataTypes.INTEGER,
      width: DataTypes.FLOAT,
      kost_id: DataTypes.INTEGER,
      owner_id: DataTypes.INTEGER,
      label: DataTypes.STRING,
      max_person: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
      tableName: "tbl_room",
      createdAt: "created_date", // alias createdAt as created_date
      updatedAt: "updated_date", // alias updatedAt as updated_date
    }
  );
  return Room;
};
