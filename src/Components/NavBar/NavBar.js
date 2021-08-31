import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'



function NavBar() {
  return (
  <>
  
<Navbar bg="dark" variant="dark" className="nav">
    <Container>
    <Navbar.Brand href="/">Quick Meals</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="MealCategories">Meal Categories</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  </>
  );
}

export default NavBar;
