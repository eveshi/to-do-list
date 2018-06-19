const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const items = require('./routes/items');
const users = require('./routes/users');

const errorHandling = require('./error-handling');

const port = process.env.port || 5000;

mongoose.connect(
  process.env.MONGO_URL,
  (err, next) => {
    next(err);
  },
);

const app = express();
app.listen(port);

app.use(express.static(path.join(__dirname, '../src')));
app.get('/', (req, res, next) => {
  try {
    res.sendFile('../public/index.html');
  } catch (error) {
    next(error);
  }
});

app.use(bodyParser);

app.use('/items', items);
app.use('/users', users);

app.use(errorHandling);
