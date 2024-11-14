const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// Get all hotels
router.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new hotel
router.post('/hotels', async (req, res) => {
  try {
    const { name, place, photo, contact, mapLink, pricePerDay } = req.body;
    const newHotel = new Hotel({ name, place, photo, contact, mapLink, pricePerDay });
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(500).json({ message: 'Error adding hotel' });
  }
});

// Delete a hotel by ID
router.delete('/hotels/:id', async (req, res) => {
  try {
    const hotelId = req.params.id;
    const hotel = await Hotel.findByIdAndDelete(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
