import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddHotel() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [photo, setPhoto] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [contact, setContact] = useState(''); // Added state for contact
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newHotel = { name, place, photo, mapLink, pricePerDay, contact }; // Added contact here
      await axios.post('http://localhost:5000/api/hotels', newHotel);
      navigate('/'); // Redirect after successful submission
    } catch (error) {
      console.error('Error adding hotel:', error);
      alert('Failed to add hotel');
    }
  };

  return (
    <div>
      <h2>Add Place</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        
        <label>Place:</label>
        <input type="text" value={place} onChange={e => setPlace(e.target.value)} />
        
        <label>Photo URL:</label>
        <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} />
        
        <label>Map Link:</label>
        <input type="text" value={mapLink} onChange={e => setMapLink(e.target.value)} />
        
        <label>Price Per Day:</label>
        <input type="number" value={pricePerDay} onChange={e => setPricePerDay(e.target.value)} />
        
        <label>Contact:</label> {/* Added contact input */}
        <input type="number" value={contact} onChange={e => setContact(e.target.value)} />
        
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
}

export default AddHotel;
