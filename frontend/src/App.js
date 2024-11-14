import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Add useNavigate import
import AddHotelForm from './components/AddHotelForm';
import HotelTable from './components/HotelTable';
import DeleteHotels from './components/DeleteHotels';
import './App.css';
import BookingPage from './components/BookingPage';

function FrontPage() {
  const navigate = useNavigate();

  const startTrip = () => {
    navigate('/hotels'); // Redirects to the hotels page
  };

  return (
    <div className="front-page">
      <button onClick={startTrip} className="start-trip-button">
        Start Your Trip
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/add-hotel" element={<AddHotelForm />} />
          <Route path="/hotels" element={<HotelTable />} />
          <Route path="/delete-hotels" element={<DeleteHotels />} />
          <Route path="/book-hotel/:hotelId" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
