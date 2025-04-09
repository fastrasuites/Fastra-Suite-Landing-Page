import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterLogo  from '../assets/flogo.png';

// Import your image icons
import TwitterIcon from '../assets/twitter.png';
import FacebookIcon from '../assets/facebook.png';
import LinkedInIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#05204a', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <img src={FooterLogo} alt="Fastra Suite Logo" style={{ marginBottom: '20px' }} />
            <p>+234 801 234 5679</p>
            <p>info@fastrasuite.com</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Products</li>
              <li>Inventory Management</li>
              <li>Project Costing</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5></h5>
            <ul className="list-unstyled">
              <li>Company</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Subscribe</h5>
            <Form className='input'>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Get product updates" />
              </Form.Group>
              <Button variant="primary" type="submit" className='submit'>
                →
              </Button>
            </Form>
          </Col>
        </Row>
        <br />
        <hr />
        <Row className="mt-4">
          <Col md={6} className="text-md-left text-left mb-2 mb-md-0">
            <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" className="mx-2" style={{ width: '30px' }} /></a>
            <a href="https://facebook.com"><img src={FacebookIcon} alt="Facebook" className="mx-2" style={{ width: '30px' }} /></a>
            <a href="https://linkedin.com"><img src={LinkedInIcon} alt="LinkedIn" className="mx-2" style={{ width: '30px' }} /></a>
          </Col>
          <Col md={6} className="text-md-right text-right">
            <p className='copyright'>© 2024 FastraSuites. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
