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
      numOfPeople: DataTypes.INTEGER,
      transactionDate: DataTypes.DATE,
      startRent: DataTypes.DATE,
      price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      rentalDuration: DataTypes.INTEGER,
      rentalScheme: DataTypes.STRING,
      urlDocument: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
