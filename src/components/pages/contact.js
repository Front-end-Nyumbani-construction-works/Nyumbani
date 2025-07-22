import React from "react";
import '../css/contact.css';
import ReachOutForm from './reachus.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  return (
    <div className="contact-main-container">
      {/* Left Side */}

            <div className="history-section">

                 <div className="history-image">
                    <img src="/assets/background image.jpeg" alt="Our History" />
                </div>

                <div className="history-text">
 <div className="contact-container small-box">
          <div className="contact-box">
            <h2>ADDRESS</h2>
            <div><i className="bi bi-geo-alt icon"></i></div>
            <h2>NAJJERA TOWN</h2>
            <h2>WAKISO DISTRICT</h2>
            <h2>KAMPALA, UGANDA</h2>
          </div>
        </div>

        <div className="middle-boxes">
          <div className="contact-container small-box">
            <div className="contact-box">
              <h2>CONTACT US</h2>
              <p><i className="bi bi-whatsapp icon"></i> 0777191140</p>
              <p><i className="bi bi-telephone-fill icon"></i> 0755123456</p>
              <p><i className="bi bi-envelope-fill icon"></i> muzingajames@gmail.com</p>
            </div>
          </div>

          <div className="contact-container small-box">
            <div className="contact-box">
              <h2>SOCIAL MEDIA</h2>
              <p>Reach out to us:</p>
              <div className="contact-icons">
                <i className="bi bi-facebook icon"></i>
                <i className="bi bi-linkedin icon"></i>
                <i className="bi bi-twitter-x icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-container full-width small-box">
          <div className="contact-box">
            <h2>WORKING HOURS</h2>
            <p>We are open:</p>
            <p>Monday to Friday: 8am - 8pm</p>
            <p>Saturday: 9am - 5pm</p>
          </div>
        </div>
            </div>
            </div>

                  <div className="left-side">
        <div className="form-wrapper">
          <ReachOutForm />
        </div>
      </div>


      <div className="right-side">
        <img src="/assets/background image.jpeg" alt="Contact Background" className="contact-banner" />

       

        <div className="contact-details">
          <h4>Have a question or need our services? We'd love to hear from you:</h4>
          <strong>muzingajames@gmail.com</strong>
        </div>

        <div className="extra-image">
          <img src="/assets/Untitled design.png" alt="Company Design" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
