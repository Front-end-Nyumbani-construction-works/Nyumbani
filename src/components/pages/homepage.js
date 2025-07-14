import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage.css';

function Homepage() {
  return (
    <div
      className="header-background d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: "url('/assets/background image.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <h1 className="display-4 text-white" style={{ fontWeight: 'bold' }}>NYUMBANI CONSTRUCTION WORKS</h1>
      <h2 className="h4 text-white" style={{ fontStyle: 'italic' }}>Your One Stop Shop For Construction Excellence</h2>
      <Link to='/about' className="btn btn-warning mt-4">OUR STORY</Link><br/><br/><br/><br/>
    </div>
  );
}

export default Homepage;
