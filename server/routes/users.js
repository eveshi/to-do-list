const createError = require('http-errors');
const express = require('express');

const User = require('../models/user');

const router = express.Router();

// Create user
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.user) {
      next(createError(400, 'bad_request'));
    }

    await User.create(req.body.user, (err) => {
      next(err);
    });

    res.json({
      message: 'post user successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Read user
router.get('/', async (req, res, next) => {
  try {
    if (!req.body.email) {
      next(createError(400, 'bad_request'));
    }

    await User.findOne(
      { email: req.body.email },
      (err) => {
        next(err);
      },
    );

    res.json({
      message: 'post user successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Update user password
router.patch('/', async (req, res, next) => {
  try {
    if (!req.body.user ||
        !req.body.user.email ||
        !req.body.user.password) {
      next(createError(400, 'bad_request'));
    }

    await User.updateOne(
      { email: req.body.user.email },
      { password: req.body.password },
      (err) => {
        next(err);
      },
    );

    res.json({
      message: 'update user successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Delete user
router.delete('/', async (req, res, next) => {
  try {
    if (!req.body.email) {
      next(createError(400, 'bad_request'));
    }

    await User.deleteOne(
      { email: req.body.email },
      (err) => {
        next(err);
      },
    );

    res.json({
      message: 'post user successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
