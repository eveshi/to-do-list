const ERROR_HANDLING = (err, req, res, next) => {
  if (err.message === 'bad_request') {
    res.send({
      code: 400,
      type: err.message,
      message: 'Bad Request',
    });
    return;
  }

  res.status(404).send({
    code: 404,
    type: 'not_found',
    message: 'Page Not Found',
  });

  res.send({
    code: 500,
    type: 'server_error',
    message: 'Server Errors',
  });
  next();
};

module.exports = ERROR_HANDLING;

