import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'



function NavBar() {
  return (
  <>
<Navbar fixed="top" bg="light" expand="lg" className="navbar">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link className="navbar-link" href="#">Meal Categories</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
  );
}

export default NavBar;
