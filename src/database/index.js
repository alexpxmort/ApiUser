const Sequelize = require('sequelize');
const DbConfig = require('../config/database');
const User = require('../models/user');

const connection = new Sequelize(DbConfig);
User.init(connection);

module.exports = connection;
