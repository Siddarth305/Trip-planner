import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

function BookingPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleBooking = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Age: ${age}`, 10, 20);
    doc.text(`From Date: ${fromDate}`, 10, 30);
    doc.text(`To Date: ${toDate}`, 10, 40);
    doc.text('Reservation Complete!', 10, 50);
    doc.save(`booking_receipt_${name}.pdf`);
  };

  return (
    <div>
      <h2>Complete Your Reservation</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
        <label>From Date:</label>
        <input
          type="date"
          value={fromDate}
          onChange={e => setFromDate(e.target.value)}
          required
        />
        <label>To Date:</label>
        <input
          type="date"
          value={toDate}
          onChange={e => setToDate(e.target.value)}
          required
        />
        <button type="button" onClick={handleBooking}>Book Now</button>
      </form>
    </div>
  );
}

export default BookingPage;
