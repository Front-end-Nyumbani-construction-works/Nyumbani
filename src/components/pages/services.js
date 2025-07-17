import React from "react";
import '../css/services.css';
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-page">
      <div className="container">
        
        <div
          className="header-background d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: "url('/assets/services.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh'
          }}
        >
          <h2 className="h4 text-white" style={{ fontStyle: 'italic' }}>
            Ready to build your dream structure? Explore our services to see how we can bring it to life.
          </h2>
          <Link to='/contact' className="btn btn-warning mt-4">CONTACT US</Link>
          <br /><br /><br /><br />
        </div>

        <div className="services-grid">
          <div className="services-box box-top-left">
            <h2>
              <img src="/assets/professionalism.png" alt="Professionalism Icon" />
              Manufacture of Concrete Blocks
            </h2>
            <p>We manufacture various concrete blocks in different sizes based on client preferences and structural needs.</p>
          </div>

          <div className="services-box box-top-right">
            <h2>
              <img src="/assets/integrity.png" alt="Integrity Icon" />
              High-Quality Pavers
            </h2>
            <p>We manufacture and install eco-friendly, durable, and visually appealing pavers in multiple types and colors.</p>
          </div>

          <div className="services-box box-bottom-left">
            <h2>
              <img src="/assets/exceptional service logo.png" alt="Exceptional Service Icon" />
              Premium Tiles
            </h2>
            <p>Our premium tiles cater to residential, commercial, and industrial needs, tailored to your desired aesthetics.</p>
          </div>

          <div className="services-box box-bottom-right">
            <h2>
              <img src="/assets/exceptional service logo.png" alt="Exceptional Service Icon" />
              Best Cement Brands
            </h2>
            <p>We offer top-quality cement brands, known for their superior raw material composition for your construction needs.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
