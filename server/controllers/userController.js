const User = require('../models/userModel');

function getUsers(req, res) {
  User.findAll().then((users) => {
    res.status(200).send(users);
  });
}

function addUser(req, res) {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
  })
  .then(() => res.send('User added'))
  .catch(err => res.send(err));
}

module.exports = { getUsers, addUser };
