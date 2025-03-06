import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dashboard from '../assets/img.png';

const DashboardSection = () => {
  return (
    <Container className="position-relative dashboard" id='company'>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center text-white p-5">
          <h1 className="display-4">The best Enterprise<br /> Business Management<br /> Software at your fingertips.</h1>
          <p className="lead">Streamline Your Operations and Drive Growth.<br /> Learn More Now</p>
          <Button variant="light" className="mt-3 btn">
          <Link style={{textDecoration: 'none', color: '#020A17'}} to="https://app.fastrasuite.com/">Get started for free! <i className='bx bx-right-arrow-alt' ></i></Link></Button>
        </Col>
        <Col md={6} className="position-relative">
          <img 
            src={Dashboard}
            alt="Dashboard" 
            className="position-absolute img-fluid" 
            style={{ top: '10%', right: 0, bottom: 0 }}
            
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardSection;
