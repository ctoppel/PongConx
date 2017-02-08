const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const messageController = require('./messages/messageController');
// const authController = require('./utils/authController');
// const cookieParser = require('cookie-parser');

const app = express();


app.use(bodyParser.json());
// app.use(cookieParser());

app.get('/', (request, response) => {
  response.sendFile(path.resolve('client/index.html'));
  // response.send('hi');
});

// app.post('/messages', messageController.postMessage);

// app.use(express.static(path.join(__dirname, './../'))); // serves the index.html
app.use(express.static(path.join(__dirname, './../client'))); // serves the index.html
app.listen(3000); // listens on port 3000 -> http://localhost:3000/

module.exports = app;
