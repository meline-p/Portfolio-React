import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            <i class="fas fa-mug-hot"></i> Méline Pischedda
            <span> / DEVELOPPEUSE WEB</span>
          </Link>

          <div>
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  A PROPOS DE MOI
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/cv" className="nav-link">
                  CV
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/projets" className="nav-link">
                  PROJETS
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
