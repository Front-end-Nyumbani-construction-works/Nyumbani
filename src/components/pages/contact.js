import React from "react";
import '../css/contact.css';
import ReachOutForm from './reachus.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  return (
    <>
  
      <div className="contact-main-container">
        {/* Left Side: Image + Form */}
        <div className="left-side">
          <div className="contact-image">
            <img src="/assets/background image.jpeg" alt="Contact" className="contact-image" />
            <div className="right-side">
        <div className="contact-container">
         <h2>CONTACT US</h2>
         <p className="bi bi-whatsapp icon"> 0777191140</p>
         <p className="bi bi-whatsapp icon"> 0777191140</p>
         <p className="bi bi-envelope-fill icon"> Email</p>
        </div>
        
 
        
        <div className="contact-container">
         <h2>SOCIAL MEDIA</h2>
            <p>Reach out to us:</p>
            <div className="contact-box"><i className="bi bi-facebook icon"></i></div>
            <div className="contact-box"><i className="bi bi-linkedin icon"></i></div>
            <div className="contact-box"><i className="bi bi-twitter-x icon"></i></div>
        </div>
        

  
        <div className="contact-container">
         <h2>Working Hours</h2>
            <p>We are open:</p>
            <p>Monday to friday 8am-8pm</p>
            <p>Saturday 9am-5pm</p>

        </div>
         </div>
          </div>

          <div className="form-wrapper">
            <ReachOutForm />
          </div>
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

          </div>
        </div>
    </>
  );
}

export default Contact;
