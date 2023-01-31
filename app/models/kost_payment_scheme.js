"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KostPaymentScheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KostPaymentScheme.init(
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
      modelName: "KostPaymentScheme",
      tableName: "kost_payment_scheme",
      timestamps:false
    }
  );
  KostPaymentScheme.removeAttribute('id')
  return KostPaymentScheme;
};
