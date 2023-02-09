/* eslint-disable unused-imports/no-unused-vars */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Room, {
        foreignKey: "room_id",
      });
    }
  }
  RoomImage.init(
    {
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "room_image",
      modelName: "RoomImage",
    }
  );
  return RoomImage;
};
