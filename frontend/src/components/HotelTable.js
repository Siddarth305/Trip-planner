import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HotelTable() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels')
      .then(response => setHotels(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <button
        style={{
          position: 'absolute',
          top: 20,
          right: 80,
          padding: '10px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/add-hotel')}
      >
        Add
      </button>

      <button
        style={{
          position: 'absolute',
          top: 20,
          right: 10,
          padding: '10px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/delete-hotels')}
      >
        Delete
      </button>

      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Place</th>
            <th>Contact</th>
            <th>Price</th>
            <th>Map Link</th>
            <th>Booking</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map(hotel => (
            <tr key={hotel._id}>
              <td><img src={hotel.photo} alt={hotel.name} width="100" /></td>
              <td>{hotel.name}</td>
              <td>{hotel.place}</td>
              <td>{hotel.contact}</td>
              <td>${hotel.pricePerDay}</td>
              <td><a href={hotel.mapLink} target="_blank" rel="noopener noreferrer">Map Link</a></td>
              <td>
                {/* Navigate to booking page with the hotelId */}
                <button onClick={() => navigate(`/book-hotel/${hotel._id}`)}>
                  Reservation
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HotelTable;
