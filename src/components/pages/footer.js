import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import {
  FaInstagram, FaFacebook, FaWhatsapp, FaTwitter,
  FaHome, FaUtensils, FaGift, FaEnvelope, FaCommentDots,
  FaShieldAlt, FaLock, FaQuestionCircle, FaShippingFast
} from 'react-icons/fa';

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
        minHeight: '100vh'
      }}
    >
      <div className="footer-overlay">
        <Container>
          <Row>
            <Col md={3} className="mb-4">
              <Image src="/assets/logo1.png" roundedCircle width={60} />
              <h5 className="mt-3 text-warning">Nyumbani Construction</h5>
              <p>Building with integrity and professionalism.</p>
              <ul className="list-unstyled">
                <li><FaInstagram className="me-2"/> Instagram</li>
                <li><FaFacebook className="me-2"/> Facebook</li>
                <li><FaWhatsapp className="me-2"/> WhatsApp</li>
                <li><FaTwitter className="me-2"/> Twitter</li>
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
                <li><FaHome className="me-2"/> Home</li>
                <li><FaUtensils className="me-2"/> About Us</li>
                <li><FaGift className="me-2"/> Projects</li>
                <li><FaEnvelope className="me-2"/> Contact</li>
                <li><FaCommentDots className="me-2"/> Services</li>
              </ul>

              <h5 className="text-warning mt-3">Utilities</h5>
              <ul className="list-unstyled">
                <li><FaShieldAlt className="me-2"/> Terms & Conditions</li>
                <li><FaLock className="me-2"/> Privacy Policy</li>
                <li><FaQuestionCircle className="me-2"/> Help Center</li>
                <li><FaShippingFast className="me-2"/> Track Order</li>
              </ul>
            </Col>

            <Col md={3}>
              <h5 className="text-warning mb-3">Gallery</h5>
              <Row>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <Col xs={6} className="mb-3" key={i}>
                    <Card className="bg-light">
                      <Card.Img src='../assets/pavers manufacturing.jpg' alt='Manufacturing pavers' />

                    </Card>
                  </Col>
                ))}
              </Row>
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
