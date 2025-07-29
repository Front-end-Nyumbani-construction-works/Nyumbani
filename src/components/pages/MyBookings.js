import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/service/my-bookings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => setBookings(res.data.bookings))
    .catch(err => setError(err.response?.data?.error || "Error loading bookings"));
  }, []);

  return (
    <div className="container py-5">
      <h2>My Bookings</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {bookings.map((b, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <img src={`/assets/${b.image}`} className="card-img-top" alt={b.title} />
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>
                <p className="card-text">{b.description}</p>
                <p><strong>Booking ID:</strong> {b.booking_id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
