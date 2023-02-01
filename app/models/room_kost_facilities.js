"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.hasMany(models.Rating);
      Room.belongsTo(models.Account,{
        foreignKey: 'owner_id'
      });
    }
  }
  Room.init(
    {
    // room_image_id: DataTypes.INTEGER,
    // additional_facility_id: DataTypes.INTEGER,
    // facility_id: DataTypes.INTEGER,
    // rating_id: DataTypes.INTEGER,
    // price_per_category: DataTypes.DOUBLE,
    // thumbnail_id: DataTypes.INTEGER,
      owner_id: DataTypes.INTEGER,
      kost_id: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      price: DataTypes.FLOAT,
      indoor_bathroom: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
      name: DataTypes.STRING,
      room_number: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
      width: DataTypes.FLOAT,
      length: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      available_room: DataTypes.INTEGER,
      max_person: DataTypes.INTEGER,
      is_available:DataTypes.BOOLEAN,
      is_deleted:DataTypes.BOOLEAN,
      created_date:DataTypes.DATE,
      updated_date:DataTypes.DATE
    },
    {
      sequelize,
      tableName:'tbl_room',
      modelName:'Room',
      timestamps:false,
    }
  );
  return Room;
};
