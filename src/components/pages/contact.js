import React from "react";
import '../css/contact.css';
import ReachOutForm from './reachus.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  return (
    <>
      <header>
        <h1>CONTACT US</h1>
      </header>

      <div className="contact-main-container">
        {/* Left Side: Image + Form */}
        <div className="left-side">
          <div className="contact-image">
            <img src="/assets/background image.jpeg" alt="Contact" className="contact-image" />
          </div>

          <div className="form-wrapper">
            <ReachOutForm />
          </div>
        </div>

        {/* Right Side: Contact boxes + Get in Touch */}
        <div className="right-side">
          <div className="info-container">
            <div className="contact-box">CONTACT US 
              <i className="bi bi-whatsapp icon"></i>Whatsapp</div>

            <div className="contact-box"><i className="bi bi-envelope-fill icon"></i>Email</div>
            <div className="contact-box"><i className="bi bi-facebook icon"></i>Facebook</div>
            <div className="contact-box"><i className="bi bi-linkedin icon"></i>LinkedIn</div>
            <div className="contact-box"><i className="bi bi-twitter-x icon"></i>Twitter</div>
          </div>

          <div className="contact-details">
            <h4>Have a question or need our services?
              We'd love to hear from you -reach out at:
              muzingajames@gmail.com
            </h4>

            <div className="contact-image">
            <img src="/assets/Untitled design.png" alt="Contact" className="contact-image" />
          </div>

           <div className="contact-image">
            <img src="/assets/free.png" alt="Contact" className="contact-image" />
          </div>


            {/* <h2>Get in Touch</h2>
            <p>Email: nyumbaniconstructionworks@gmail.com</p>
            <p>Phone: +256 123 456 789</p>
            <p>Address: Plot 10, Main Street, Kampala, Uganda</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
