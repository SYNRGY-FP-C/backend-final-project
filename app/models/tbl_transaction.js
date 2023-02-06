/* eslint-disable unused-imports/no-unused-vars */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      created_date: DataTypes.DATE,
      is_deleted: DataTypes.BOOLEAN,
      updated_date: DataTypes.DATE,
      end_rent: DataTypes.DATE,
      num_of_people: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      rental_duration: DataTypes.INTEGER,
      rental_scheme: DataTypes.STRING,
      start_rent: DataTypes.DATE,
      status: DataTypes.STRING,
      transaction_date: DataTypes.DATE,
      url_document: DataTypes.STRING,
      account_id: DataTypes.INTEGER,
      payment_id: DataTypes.INTEGER,
      room_kost_id: DataTypes.INTEGER,
      addons_feature_price: DataTypes.FLOAT,
      payment_scheme: DataTypes.STRING,
      addons_facilities_price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Transaction",
      tableName: "tbl_transaction",
      timestamps: false,
    }
  );
  return Transaction;
};
