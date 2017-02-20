const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const resultController = require('./controllers/resultController');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.static(path.join(__dirname, './../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'anyStringOfText',
  saveUninitialized: true,
  resave: true,
}));

// app.get('/', (req, res) => {
//   res.cookie('firstCookie', 'looks good!');
//   res.send('hi');
//   console.log(req.cookies);
//   console.log('------------');
//   console.log(req.session);
// });
app.get('/users', userController.getUsers);

app.post('/users', userController.addUser);
// app.post('/results', resultController.updateUsers);

app.put('/users', userController.updateUser);

app.listen(3000);

module.exports = app;
