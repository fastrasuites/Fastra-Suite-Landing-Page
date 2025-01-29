import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import googleLogo from '../assets/google.png';
import amazonLogo from '../assets/amazon.png';
import spotifyLogo from '../assets/spotify.png';


const CustomerRating = () => {
  const reviews = [
    { company: 'Google', logo: googleLogo, rating: 5, review: 'Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus. Proin luctus.' },
    { company: 'Amazon', logo: amazonLogo, rating: 5, review: 'Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus. Proin luctus.' },
    { company: 'Spotify', logo: spotifyLogo, rating: 5, review: 'Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus. Proin luctus.' }
  ];

  return (
    <Container className="text-center rating" id='customer'>
      <h2>Customers have consistently rated
      <br />Around 4.7/5 stars</h2>
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
