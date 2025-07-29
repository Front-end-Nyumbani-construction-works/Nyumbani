import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageServices() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios.get('http://localhost:5000/api/v1/service/services')
      .then(res => setServices(res.data.services));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/v1/service/services/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(fetchServices);
  };

  const handleAdd = () => {
    axios.post('http://localhost:5000/api/v1/service/services', newService, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(() => {
      fetchServices();
      setNewService({ title: '', description: '', image: '' });
    });
  };

  return (
    <div className="container py-5">
      <h2>Manage Services</h2>
      <div className="mb-4">
        <input type="text" placeholder="Title" className="form-control mb-2"
          value={newService.title} onChange={e => setNewService({ ...newService, title: e.target.value })} />
        <textarea placeholder="Description" className="form-control mb-2"
          value={newService.description} onChange={e => setNewService({ ...newService, description: e.target.value })} />
        <input type="text" placeholder="Image filename" className="form-control mb-2"
          value={newService.image} onChange={e => setNewService({ ...newService, image: e.target.value })} />
        <button onClick={handleAdd} className="btn btn-success">Add Service</button>
      </div>

      <ul className="list-group">
        {services.map(s => (
          <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{s.title}</strong><br />
              {s.description}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageServices;


//in app.js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* All your routes */}
      <ToastContainer />
    </>
  );
}



// // in any components
// // import { toast } from 'react-toastify';

// // Success example
// toast.success("Booking confirmed!");

// // Error example
// toast.error("Something went wrong");

// //install
// npm install react-toastify

