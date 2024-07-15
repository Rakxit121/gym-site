// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date: Date,
  duration: Number,
  price: Number,
  image: String
});

module.exports = mongoose.model('Class', classSchema);
