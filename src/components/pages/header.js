import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';  // Your custom styles with hover

const Header = () => {
  return (
    <header className="header border-bottom border-warning">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div>
          <img 
            src="/assets/logo1.png" 
            alt="Nyumbani Construction Works" 
            style={{ width: '100px', height: 'auto' }} 
          />
        </div>

        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/gallery">GALLERY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/projects">PROJECTS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
