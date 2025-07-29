import React, {useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function BookService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    axios.post(`http://localhost:5000/api/v1/service/services/${id}/book`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`  // token from login
      }
    })
    .then(res => {
      setMessage("Booking successful!");
      setTimeout(() => navigate('/services'), 2000);
    })
    .catch(err => {
      if (err.response) setMessage(err.response.data.error || "Booking failed.");
    });
  };

  return (
    <div className="container py-5">
      <h2>Confirm Booking for Service #{id}</h2>
      {message && <p>{message}</p>}
      <button className="btn btn-warning mt-3" onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default BookService;
