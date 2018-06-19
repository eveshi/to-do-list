const ERROR_HANDLING = (err, req, res, next) => {
  res.status(400).json({
    code: 400,
    type: 'bad_requst',
    message: 'Bad Request',
  });

  res.status(404).json({
    code: 404,
    type: 'not_found',
    message: 'Page Not Found',
  });

  res.json({
    code: 500,
    type: 'server_error',
    message: 'Server Errors',
  });
  next();
};

module.exports = ERROR_HANDLING;

