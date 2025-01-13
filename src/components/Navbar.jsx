import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarMenu({ brandLogo, links, signInText, signUpText }) {
  return (
    <Navbar expand="lg" className="bg-body-light custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src={brandLogo} alt="logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 menu-links"
            style={{ maxHeight: 'auto' }}
            navbarScroll
          >
            {links.map((link, index) => (
              <Nav.Link href={link.href} key={index}>{link.text}</Nav.Link>
            ))}
          </Nav>
          <div className='signBtn'>
          <Button>{signInText}</Button>
          <Button className='signUp'>{signUpText}</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavbarMenu.propTypes = {
  brandLogo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  signInText: PropTypes.string,
  signUpText: PropTypes.string,
};

NavbarMenu.defaultProps = {
  signInText: 'Sign In',
  signUpText: 'Sign Up',
};

export default NavbarMenu;
