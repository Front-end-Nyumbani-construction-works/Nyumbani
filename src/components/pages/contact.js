import React from "react";
import '../css/contact.css';
import ReachOutForm from './reachus.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  return (
    <>
    
      <header>
        <h1>Contact Us</h1>
      </header>

      <div className="info-container">
        <div className="contact-box">
          <h2>
            <i className="bi bi-whatsapp" style={{ fontSize: '2rem', color: '#25D366', marginRight: '10px' }}></i>
            Whatsapp
          </h2>
        </div>

        <div className="contact-box">
          <h2>
            <i className="bi bi-envelope-fill" style={{ fontSize: '2rem', color: '#D44638', marginRight: '10px' }}></i>
            Email
          </h2>
        </div>

        <div className="contact-box">
          <h2>
            <i className="bi bi-facebook" style={{ fontSize: '2rem', color: '#3b5998', marginRight: '10px' }}></i>
            Facebook
          </h2>
        </div>

        <div className="contact-box">
          <h2>
            <i className="bi bi-linkedin" style={{ fontSize: '2rem', color: '#0077b5', marginRight: '10px' }}></i>
            LinkedIn
          </h2>
        </div>

        <div className="contact-box">
          <h2>
            <i className="bi bi-twitter-x" style={{ fontSize: '2rem', color: '#1DA1F2', marginRight: '10px' }}></i>
            Twitter
          </h2>
        </div>
      </div>

      <div className="container contact-form-section">
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Email: nyumbaniconstructionworks@gmail.com</p>
          <p>Phone: +256 123 456 789</p>
          <p>Address: Plot 10, Main Street, Kampala, Uganda</p>
        </div>

        <div className="form-wrapper">
          <ReachOutForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
