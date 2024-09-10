const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Staff = sequelize.define(
  "Staff",
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
    MAIL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PHONE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    COUNTRY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DESCRIPTION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ADDRESS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DATE_OF_BIRTH: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    COMPANY_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CONTACT_PERSON: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    URL_WEBSITE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PROVINCE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CITY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    POSTAL_COST: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ID_DEPARTMENT_INVENTORY: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    USER_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LAST_LOGIN: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LAST_PASSWORK_CHANGE: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Staff;
