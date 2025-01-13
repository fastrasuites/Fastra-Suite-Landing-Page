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
      text: 'The Fastra Suite is a robust and highly customizable software solution designed to optimize your business operations and drive growth. Whether you are a small business or a large enterprise, Fastra Suite adapts to your unique needs, offering unparalleled flexibility and performance.'
    }
  ];

  return (
    <Container className="text-center my-5 padding-top featured-box howItWorks">
      <Row>
        <Col md={6} className="d-flex flex-column align-items-center">
          {featured.map((item, index) => (
            <Card key={index} className="p-2 mb-3 card-box">
              <Row className="align-items-center">
                  <img src={item.img} alt={item.altText} className="img-fluid" />
                
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center text-start">
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
