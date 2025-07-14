import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer 
      className="footer" 
      style={{ 
        backgroundImage: "url('/assets/footer image.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderTop: '5px solid #ff4500',
      }}
    >
      <div className="footer-overlay">
        <div className="footer-container">
          
          <div className="footer-info">
            <div className="footer-section">
              <h3>Get In Touch:</h3>
               <p>Phone: +256 777 191 140</p>
              <p>Email: nyumbaniconstructionworks@gmail.com</p>
            </div>

            <div className="footer-section">
              <h3>Find Us At:</h3>
              <p>Najjera-Kungu</p>
              <p>Wakiso District</p>
              <p>Kampala-Uganda</p>
              <p>PO Box __</p>
            </div>

            <div className="footer-logo-section">
            <img 
              src="/assets/logo1.png" 
              alt="Nyumbani Construction Works Logo" 
              className="footer-logo"
            />
          </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nyumbani Construction Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
