import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
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
    </header>
  );
}
