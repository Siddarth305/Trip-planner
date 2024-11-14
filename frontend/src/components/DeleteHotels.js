import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteHotels() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels')
      .then(response => setHotels(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (hotelId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/hotels/${hotelId}`);
      if (response.status === 200) {
        setHotels(hotels.filter(hotel => hotel._id !== hotelId)); // Remove the deleted hotel from the state
      }
    } catch (error) {
      console.error('Error deleting hotel:', error);
      alert('Failed to delete hotel');
    }
  };

  return (
    <div>
      <h2>Delete Hotels</h2>
      {/* Back to main page button */}
      <button onClick={() => navigate('/')}>Back to Hotels</button>

      {/* Hotels Table */}
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Place</th>
            <th>Contact</th>
            <th>Price</th>
            <th>Map Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map(hotel => (
            <tr key={hotel._id}>
              <td><img src={hotel.photo} alt={hotel.name} width="100" /></td>
              <td>{hotel.name}</td>
              <td>{hotel.place}</td>
              <td>${hotel.contact}</td>
              <td>${hotel.pricePerDay}</td>
              <td><a href={hotel.mapLink} target="_blank" rel="noopener noreferrer">Map Link</a></td>
              <td>
                <button onClick={() => handleDelete(hotel._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteHotels;
