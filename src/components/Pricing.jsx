import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pIcon1 from '../assets/p-icon1.png';
import pIcon2 from '../assets/p-icon2.png';

const Pricing = () => {
    return (
        <Container className="my-5" id='pricing'>
            <h2 className="text-center mb-4 pricing-heading">Pricing</h2>
            <p className="text-center mb-4" style={{ paddingBottom: '20px'}}>Grow your enterprise while maintaining security with Fastra Suite</p>
            <Row className="justify-content-center">
                <Col md={5} className="mb-4 pricing">
                    <Card className='no-outline'>
                        <Card.Body className='box'>
                            <div className="d-flex align-items-center mb-3">
                                <div className="me-3">
                                <img src={pIcon1} alt="Standard" />
                                </div>
                                <div className='plan'>
                                    <h5 style={{ color: '#3B7DED'}}>Standard</h5>
                                    <p style={{ fontWeight: '700'}}>$ <span style={{ fontSize: '35px'}}>75</span> <small style={{ fontStyle: 'italic', fontWeight: '200'}}>per month</small></p>
                                </div>
                            </div>
                            <ul className="list-unstyled">
                                <li><i class='bx bx-check-circle'></i> Using basic skills you can</li>
                                <li><i class='bx bx-check-circle'></i> Using basic skills you can impr</li>
                                <li><i class='bx bx-check-circle'></i> Using basic skills you can improve</li>
                                <li><i class='bx bx-check-circle'></i> Using basic skills you can</li>
                                <li><i class='bx bx-x-circle'style={{ color: '#E43E2B'}}></i> Using basic skills you can</li>
                                <li><i class='bx bx-x-circle' style={{ color: '#E43E2B'}} ></i> Using basic skills you can</li>
                            </ul>
                            <Button variant="primary" className="w-100 btn">Get Started</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className="mb-4 pricing">
                    <Card className='no-outline'>
                        <Card.Body className='box green'>
                            <div className="d-flex align-items-center mb-3">
                                <div className="me-3">
                                    <img src={pIcon2} alt="Enterprise" />
                                </div>
                                <div className='plan'>
                                    <h5 style={{ color: '#448C74'}}>Enterprise</h5>
                                    <p style={{ fontWeight: '600', fontSize: '25px', lineHeight: '1.2'}}>Allows 100% <br /> Customization</p>
                                </div>
                            </div>
                            <ul className="list-unstyled">
                                <li><i class='bx bx-check-circle' style={{ color: '#448C74'}}></i> Using basic skills you can</li>
                                <li><i class='bx bx-check-circle' style={{ color: '#448C74'}}></i> Using basic skills you can impr</li>
                                <li><i class='bx bx-check-circle' style={{ color: '#448C74'}}></i> Using basic skills you can improve</li>
                                <li><i class='bx bx-check-circle' style={{ color: '#448C74'}}></i> Using basic skills you can</li>
                                <li><i class='bx bx-check-circle' style={{ color: '#448C74'}}></i> Using basic skills you can</li>
                                <li><i class='bx bx-check-circle' style={{ color: '#448C74'}}></i> Using basic skills you can</li>
                            </ul>
                            <Button variant="danger" className="w-100 btn red">Get a quote</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Pricing;
