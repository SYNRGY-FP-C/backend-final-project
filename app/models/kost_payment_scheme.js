"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KostPaymentSchemes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KostPaymentSchemes.init(
    {
      kost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payment_scheme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "KostPaymentSchemes",
      tableName: "kost_payment_schemes",
      timestamps:false
    }
  );
  KostPaymentSchemes.removeAttribute('id')
  return KostPaymentSchemes;
};
