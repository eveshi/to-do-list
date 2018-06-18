const express = require('express');
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb+srv://eveshi:woaiCHINA52c!@cluster0-tdf3l.mongodb.net/to-do-list';

const router = express.Router();

// post new item to DB
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.item || !req.body.userEmail) {
      next(new Error('bad_request'));
    }

    const client = await MongoClient.connect(MONGO_URL);

    const db = client.db('to-do-list');

    const addItem = await db.collection('item').update(
      { email: req.body.userEmail },
      {
        $set: { item: req.body.item },
      },
      { upsert: true },
    );

    if (addItem.writeConcernError || addItem.writeError) {
      next(new Error('fail_in_server'));
    }

    res.send('post item successfully');
    return;
  } catch (error) {
    next(error);
  }
});

// delete old item in DB
router.delete('/', async (req, res, next) => {
  try {
    if (!req.body.item || !req.body.userEmail) {
      next(new Error('bad_request'));
    }

    const client = await MongoClient.connect(MONGO_URL);

    const db = client.db('to-do-list');

    const addItem = await db.collection('item').update(
      { email: req.body.userEmail },
      {
        $pull: { item: req.body.item },
      },
    );

    if (addItem.writeConcernError || addItem.writeError) {
      next(new Error('fail_in_db'));
    }

    res.send('delete item successfully');
    return;
  } catch (error) {
    next(error);
  }
});

// error-handling
router.use((err, req, res, next) => {
  next(err);
});

module.exports = router;
