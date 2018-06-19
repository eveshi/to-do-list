const createError = require('http-errors');
const express = require('express');

const Item = require('../models/item');

const router = express.Router();

// Create new item with user
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.item) {
      next(createError(400, 'bad_request'));
    }

    await Item.create(req.body.item, (err) => {
      next(err);
    });

    res.json({
      message: 'post item successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Read items
router.get('/', async (req, res, next) => {
  try {
    if (!req.body.email) {
      next(createError(400, 'bad_request'));
    }

    await Item.findOne(
      { email: req.body.email },
      (err) => {
        next(err);
      },
    );

    res.json({
      message: 'get items successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Update old item
router.patch('/', async (req, res, next) => {
  try {
    if (!req.body.email ||
        !req.body.items) {
      next(createError(400, 'bad_request'));
    }

    await Item.updateOne(
      { email: req.body.item.email },
      { items: req.body.items },
      (err) => {
        next(err);
      },
    );

    res.json({
      message: 'delete item successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Delete items with user
router.delete('/', async (req, res, next) => {
  try {
    if (!req.body.email) {
      next(createError(400, 'bad_request'));
    }

    await Item.deleteOne(
      { email: req.body.email },
      (err) => {
        next(err);
      },
    );

    res.json({
      message: 'post item successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
