import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customerimg from '../assets/cus-img.png';

const Featured = () => {
  const featured = [
    {
      altText: 'Customerimg',
      img: Customerimg,
      title: 'The robust and highly customizable Fastra Suite',
      text: 'Using basic skills you can improve your business stuff with Around Using basic skills you can improve your business stuff with Around Using basic skills.'
    }
  ];

  return (
    <Container className="text-center my-5 padding-top featured-box howItWorks">
      <Row>
        <Col md={6} className="d-flex1 flex-column align-items-center">
          {featured.map((item, index) => (
            <Card key={index} className="p-2 mb-3 card-box">
              <Row className="align-items-center">
                  <img src={item.img} alt={item.altText} className="img-fluid" />
                
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={6} className="d-flex-robust flex-column justify-content-center text-start">
          {featured.map((item, index) => (
            <React.Fragment key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
