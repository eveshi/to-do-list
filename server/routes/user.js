const express = require('express');
const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb+srv://eveshi:woaiCHINA52c!@cluster0-tdf3l.mongodb.net/to-do-list';

const router = express.Router();

// post new user to DB
router.post('/', async (req, res, next) => {
  try {
    if (!req.body.user) {
      next(new Error('bad_request'));
    }

    const client = await MongoClient.connect(MONGO_URL);

    const db = client.db('to-do-list');

    const addUser = await db.collection('user').insertOne(req.body.user);

    if (addUser.writeConcernError || addUser.writeError) {
      next(new Error('fail_in_server'));
    }

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

    const client = await MongoClient.connect(MONGO_URL);

    const db = client.db('to-do-list');

    const updateUser = await db.collection('user').update(
      { email: req.body.user.email },
      {
        $pull: { password: req.body.user.password },
      },
    );

    if (updateUser.writeConcernError || updateUser.writeError) {
      next(new Error('fail_in_db'));
    }

    res.send('update user password successfully');
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
