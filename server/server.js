const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../')));

app.get('/', (request, response) => {
  response.sendFile(path.resolve('index.html'));
});
app.get('/users', userController.getUsers);

app.post('/users', userController.addUser);

app.listen(3000);

module.exports = app;
