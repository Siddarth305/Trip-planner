const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  place: String,
  photo: String,
  contact: Number, // This field already exists.
  mapLink: String,
  pricePerDay: Number
});

module.exports = mongoose.model('Hotel', hotelSchema);
  
