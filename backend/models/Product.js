const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "Product",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NEW_PRICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    OLD_PRICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ID_RATING_PRODUCT: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_CATEGORY: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Product;
