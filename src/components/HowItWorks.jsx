import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import demoimg from '../assets/demo.png';
import subcribeimg from '../assets/subcribe.png';
import customizeimg from '../assets/customize.png';
import accessimg from '../assets/access.png';
import operationBg from '../assets/operation-bg.png';



const HowItWorks = () => {
  const operation = [
    { altText: 'Demo', img: demoimg },
    { altText: 'Subcribe', img: subcribeimg },
    { altText: 'Customize', img: customizeimg },
    { altText: 'Access', img: accessimg }
];

  return (
    <Container className="text-center my-5 padding-top howItWorks" id='product'>
      <h2>How Does Fastra Works?</h2>
      <p>Streamline Your Operation And Drive Growth</p><br />
      <Row style={{ backgroundImage: `url(${operationBg})`, backgroundRepeat: 'no-repeat', height: '40vh', padding: '20px', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        {operation.map((operation, index) => (
          <Col key={index} md={3} className="d-flex justify-content-center mb-4 operation-bg">
            <Card className="p-1 card-box">
              <Card.Body style={{ padding: '0px'}}>
                <img src={operation.img} alt={`${operation.altText} img`} className="mt-3 mb-3" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;
