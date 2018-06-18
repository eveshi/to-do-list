const express = require('express');

const Item = require('../models/item');

const router = express.Router();

// post new item to DB
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.item) {
      next(new Error('bad_request'));
    }

    Item.create(req.body.item, (err) => {
      next(err);
    });

    res.send('post item successfully');
    return;
  } catch (error) {
    next(error);
  }
});

// update old item in DB
router.patch('/', async (req, res, next) => {
  try {
    if (!req.body.items || !req.body.email) {
      next(new Error('bad_request'));
    }

    Item.updateOne(
      { email: req.body.item.email },
      { items: req.body.items },
      (err) => {
        next(err);
      },
    );

    res.send('delete item successfully');
    return;
  } catch (error) {
    next(error);
  }
});

module.exports = router;
