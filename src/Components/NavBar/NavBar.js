import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
//import {NavLink} from 'react-router-dom'



function NavBar() {
  return (
  <>
  
<Navbar className="nav">
    <Container>
    <Navbar.Brand href="#" className="navText">Instant Meals</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#" className="navText">Meal Categories</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  </>
  );
}

export default NavBar;
