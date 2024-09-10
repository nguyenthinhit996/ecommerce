const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true, // Use encryption
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log("SQL Server connected"))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
