import React, { useEffect, useState } from "react";
import '../css/services.css';
import { Link } from "react-router-dom";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/service/services')
      .then(res => {
        if (res.data && res.data.services) {
          setServices(res.data.services);
        }
      })
      .catch(err => console.error("Error fetching services:", err));
  }, []);

  return (
    <div className="services-page">
      <div className="container">

        {/* Hero Banner */}
        <div
          className="header-background d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(255,87,34,0.5)), url('/assets/services.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
          }}
        >
          <h1>
            Ready to build your dream structure?
            <br />
            <span style={{ fontSize: '28px', fontWeight: 'normal' }}>
              Explore our services to see how we can bring it to life.
            </span>
          </h1>
          <Link to='/contact' className="btn btn-warning mt-4">CONTACT US</Link>
        </div>

        {/* Services Introduction */}
        <h1 className="services-title">Our Expertise at Nyumbani Construction Works</h1>
        <p>We specialize in a diverse range of construction services tailored to meet your needs.</p>

        {/* Categories Section */}
        <div className="services-grid1">
          <div className="services-box1">
            <h4>Manufacturing & Sales</h4>
            <ul>
              <li>Concrete blocks</li>
              <li>Pavers</li>
              <li>Tiles</li>
              <li>Cement</li>
            </ul>
          </div>

          <div className="services-box1">
            <h4>Construction & Installation</h4>
            <ul>
              <li>Building structures</li>
              <li>Paver installations</li>
              <li>Tile installations</li>
              <li>General construction consultations</li>
            </ul>
          </div>
        </div>

        {/* Dynamic Service Cards */}
        <div className="services-grid2">
          {services.length > 0 ? (
            services.map(service => (
              <div key={service.id} className="services-box2">
                <h2>
                  <img
                    src={`/assets/${service.image}`}
                    alt={service.title}
                    style={{ width: '50px', marginRight: '10px' }}
                  />
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <Link to={`/book/${service.id}`} className="btn btn-sm btn-outline-warning mt-2">
                  Book Now
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center">Loading services...</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default Services;
