import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Stadium Cards built with ChatGPT</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;
