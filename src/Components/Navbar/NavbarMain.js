import React from "react";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarMain() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" style={{ height: '80px' }} >
      <Container>
        <Navbar.Brand href="/Portfolio">
          <i class="fas fa-mug-hot"></i> Méline Pischedda
          <span> / DEVELOPPEUSE WEB</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/Portfolio">A PROPOS DE MOI</Nav.Link>
            <Nav.Link href="/Portfolio/cv">CV</Nav.Link>
            <Nav.Link href="/Portfolio/projets">PROJETS</Nav.Link>
            <Nav.Link href="/Portfolio/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    /* <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/Portfolio/" className="navbar-brand">
            <i class="fas fa-mug-hot"></i> Méline Pischedda
            <span> / DEVELOPPEUSE WEB</span>
          </Link>

          <div>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link to="/Portfolio/" className="nav-link">
                  A PROPOS DE MOI
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Portfolio/cv" className="nav-link">
                  CV
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Portfolio/projets" className="nav-link">
                  PROJETS
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Portfolio/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> */
  );
}