"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kost extends Model {
    static associate(models) {
      Kost.belongsTo(models.Account,{
        foreignKey: 'id',
        as: 'account'
      });
    //   Kost.hasMany(models.Payment_scheme);
    //   Kost.hasMany(models.Kost_rule);
    //   Kost.hasMany(models.Room);
    }
  }
  Kost.init(
    {   
        // kost_rule_id : DataTypes.INTEGER,
        // payment_scheme_id: DataTypes.INTEGER,
        // room_kost_id: DataTypes.INTEGER,
        owner_id: DataTypes.INTEGER,
        kost_name: DataTypes.STRING,
        indoor_photo_url: DataTypes.STRING,
        outdoor_photo_url: DataTypes.STRING,
        additional_kost_rule: DataTypes.TEXT,
        kost_type: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        description: DataTypes.STRING,
        district: DataTypes.STRING,
        address_note: DataTypes.STRING,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        province: DataTypes.STRING,
        is_deleted:DataTypes.BOOLEAN,
        created_date:DataTypes.DATE,
        updated_date:DataTypes.DATE
    },
    {
      sequelize,
      tableName:'tbl_kost',
      modelName:'Kost',
      timestamps:false,
    }
  );
  return Kost;
};
