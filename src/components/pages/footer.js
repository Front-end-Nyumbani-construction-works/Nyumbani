import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {
  FaInstagram, FaFacebook, FaWhatsapp, FaTwitter,
  FaHome, FaUtensils, FaGift, FaEnvelope, FaCommentDots
} from 'react-icons/fa';

import '../css/footer.css';

const Footer = () => {
  return (
    <footer
      className="footer"
    >
      <div className="footer-overlay">
        <Container>
          <Row>
            <Col md={3} className="mb-4">
              {/* <Image src="/assets/logo1.png" roundedCircle width={60} /> */}
              <h5 className="mt-3 text-warning">Nyumbani Construction</h5>
              <p>Building with integrity and professionalism.</p>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none"><FaInstagram className="me-2" /></a></li>
                <li><a href="#" className="text-white text-decoration-none"><FaFacebook className="me-2" /></a></li>
                <li><a href="#" className="text-white text-decoration-none"><FaWhatsapp className="me-2" /></a></li>
                <li><a href="#" className="text-white text-decoration-none"><FaTwitter className="me-2" /></a></li>
              </ul>
            </Col>

            <Col md={3} className="mb-4">
              <h5 className="text-warning">Get In Touch</h5>
              <p>Phone: +256 777 191 140</p>
              <p>Email: nyumbaniconstructionworks@gmail.com</p>
              <p>Address: Najjera-Kungu, Wakiso District, Kampala-Uganda</p>
            </Col>

            <Col md={3} className="mb-4">
              <h5 className="text-warning">Quick Links</h5>
              <ul className="list-unstyled">
                <li><FaHome className="me-2" /> Home</li>
                <li><FaUtensils className="me-2" /> About Us</li>
                <li><FaGift className="me-2" /> Projects</li>
                <li><FaEnvelope className="me-2" /> Contact</li>
                <li><FaCommentDots className="me-2" /> Services</li>
              </ul>
            </Col>

            <Col md={3} className="mb-4">
              <h5 className="text-warning">Our Location</h5>
              <p>Visit us for consultations or material purchases.</p>
              <p>Najjera Kungu, Wakiso-Kampala</p>
              <p>Open Mon-Sat: 8:00am - 6:00pm</p>
            </Col>

          </Row>

          <hr className="border-light" />
          <p className="text-center small mb-0">
            © {new Date().getFullYear()} Nyumbani Construction Works. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;