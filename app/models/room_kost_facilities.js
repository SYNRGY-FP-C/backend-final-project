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
      roomNumber: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      available: DataTypes.BOOLEAN,
      photoUrl: DataTypes.STRING,
      rentalScheme: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
