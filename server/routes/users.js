const express = require('express');

const User = require('../models/user');

const router = express.Router();

// post new user to DB
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.user) {
      next(new Error('bad_request'));
    }

    User.create(req.body.user, (err) => {
      next(err);
    });

    res.send('post user successfully');
    return;
  } catch (error) {
    next(error);
  }
});

// update password in DB
router.patch('/', async (req, res, next) => {
  try {
    if (!req.body.user ||
        !req.body.user.email ||
        !req.body.user.password) {
      next(new Error('bad_request'));
    }

    User.updateOne(
      { email: req.body.user.email },
      { password: req.body.password },
      (err) => {
        next(err);
      },
    );

    res.send('update user password successfully');
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
