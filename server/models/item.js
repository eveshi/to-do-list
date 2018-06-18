const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Item', itemSchema);
