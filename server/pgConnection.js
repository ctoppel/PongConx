const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://pongconx:123456@localhost:5432/pongconx');

module.exports = connection;
