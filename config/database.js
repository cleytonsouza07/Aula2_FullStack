const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.RAILWAY_DB, process.env.RAILWAY_USER, process.env.RAILWAY_PASSWORD, {
  host: process.env.RAILWAY_HOST,
  dialect: 'postgres',
  port: process.env.RAILWAY_PORT,
});

module.exports = sequelize;
