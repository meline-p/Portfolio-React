import React from "react";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarMain() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" style={{ minHeight: '80px' }} >
      <Container>
        <Navbar.Brand  href="/Portfolio">
          <h1 className="navbar-brand-name">
            <i class="fas fa-mug-hot"></i> Méline Pischedda
            <span> / DEV & 3D</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link to="/Portfolio/" className="nav-link" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Portfolio/cv" className="nav-link" style={{ textDecoration: 'none' }}>
                  Profil
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Portfolio/projets" className="nav-link" style={{ textDecoration: 'none' }}>
                  Projets
                </Link>
              </li>

              {/* <li class="nav-item">
                <Link to="/Portfolio/contact" className="nav-link">
                  CONTACT
                </Link>
              </li> */}
            </ul>
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