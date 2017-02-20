const Sequelize = require('sequelize');
const connection = require('../pgConnection');
const bcrypt = require('bcryptjs');

const User = connection.define('users', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  wins: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  losses: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 1000,
  },
}, {
  hooks: {
    afterValidate: (user) => {
      user.password = bcrypt.hashSync(user.password, 8);
    },
  },
});

User.sync(
  // { force: true }
);

module.exports = User;
