const {
  user,
  database,
  password,
  host,
  type,
  connectionLimit
} = require("../config/config").database;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: type,
    logging: false,
    pool: {
      max: connectionLimit,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

module.exports = sequelize;