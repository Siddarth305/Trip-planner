const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Remove the deprecated options
mongoose.connect('mongodb://localhost:27017/tourplanner')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use('/api', hotelRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
