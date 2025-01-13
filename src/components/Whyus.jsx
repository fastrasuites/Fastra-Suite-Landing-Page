import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import whyUsImg from '../assets/whyus.png';
import iconImg from '../assets/icon.png';

const WhyUs = () => {
  const featured = [
    {
      title: 'Scale Without Limits: Automate, Integrate, and Secure Your Enterprise Operations',
      text: 'The all-in-one solution for your business',
      text2: 'Business management, simplified',
      text3: 'Your business. Elevated',
      text4: 'Unleash the power of your business',
      text5: 'From chaos to clarity. Streamline your operations',
      altText: 'Customerimg',
      img: whyUsImg,
      icon: iconImg,
    }
  ];

  return (
    <Container className="text-center my-5 padding-top howItWorks">
      <Row>
      <Col md={6} className="d-flex flex-column justify-content-center text-start why-us">
          {featured.map((item, index) => (
            <React.Fragment key={index}>
              <h2>{item.title}</h2><br /><br />
              <p><img src={item.icon} alt={item.altText} className="img-fluid" /> &nbsp; {item.text}</p>
              <p><img src={item.icon} alt={item.altText} className="img-fluid" /> &nbsp; {item.text2}</p>
              <p><img src={item.icon} alt={item.altText} className="img-fluid" /> &nbsp; {item.text3}</p>
              <p><img src={item.icon} alt={item.altText} className="img-fluid" /> &nbsp; {item.text4}</p>
              <p><img src={item.icon} alt={item.altText} className="img-fluid" /> &nbsp; {item.text5}</p>
            </React.Fragment>
          ))}
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center">
          {featured.map((item, index) => (
            <Card key={index} className="p-2 mb-3 card-box" style={{ background: 'transparent'}}>
              <Row className="align-items-center">
                  <img src={item.img} alt={item.altText} className="img-fluid" />
                
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
