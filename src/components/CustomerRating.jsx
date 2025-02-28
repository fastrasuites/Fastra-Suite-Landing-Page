import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bclLogo from '../assets/bcl-logo.png';
import almLogo from '../assets/alm-logo.png';
import tscLogo from '../assets/tsc-logo.png';


const CustomerRating = () => {
  const reviews = [
    { company: 'Bcl', logo: bclLogo, rating: 5, review: '"Fastra has transformed how we manage our business! From inventory to payroll, everything is now seamless and efficient”. ' },
    { company: 'Alm', logo: almLogo, rating: 5, review: 'Switching to Fastra was the best decision we made this year. The software is user-friendly, and insightful.' },
    { company: 'Tsc', logo: tscLogo, rating: 5, review: 'With Fastra, tracking our processes has become so much easier. We’ve saved time and significantly reduced errors in our system.' }
  ];

  return (
    <Container className="text-center my-5 rating" id='customer'>
      <h2>Customers have consistently rated Around 4.7/5 stars</h2>
      <Row>
        {reviews.map((review, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center mb-4">
            <Card className="p-3 card-box">
              <Card.Body>
                <Card.Text className='rating-star'>
                  {Array(review.rating).fill().map((_, i) => (
                    <span key={i}>&#9733;</span> // Unicode star symbol
                  ))}
                </Card.Text>
                <Card.Text className='reviews'>{review.review}</Card.Text>
                <img src={review.logo} alt={`${review.company} logo`} className="mt-3" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerRating;