import React from "react";
import '../css/services.css';
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
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
    </div>
    </div>
  );
}

export default Services;