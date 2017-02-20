const User = require('../models/userModel');

function updateUsers(req, res) {
  // User.update({
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name,
  //   password: req.body.password,
  // })
  // .then(() => res.send('Users updated'))
  // .catch(err => res.send(err));
}

module.exports = { updateUsers };
