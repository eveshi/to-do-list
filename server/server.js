const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const item = require('./routes/item');
const user = require('./routes/user');

const port = process.env.port || 5000;

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

app.use('/item', item);
app.use('/user', user);

app.use((err, req, res, next) => {
  if (err.message === 'bad_request') {
    res.send({
      code: 400,
      type: err.message,
      message: 'Bad Request',
    });
    return;
  }

  if (err.message === 'fail_in_db') {
    res.send({
      code: 400,
      type: err.message,
      message: 'Server Errors',
    });
    return;
  }

  res.send({
    code: 500,
    type: 'other_server_error',
    message: 'Server Errors',
  });
  next();
});
