import React from "react";
import { Link } from "react-router-dom";


export default function NavbarCV() {
  return (
    <div className="navbar-cv-group">
      <ul className=" navbar-cv nav">
        <li className="nav-item">
          <Link to="/cv" className="nav-link"><i class="cv-icons fa-solid fa-briefcase"></i><br/>
            Expérience Professionnelle
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cv/formation" className="nav-link"> <i class="cv-icons fa-solid fa-graduation-cap"></i> <br/>
            Formation
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cv/competences" className="nav-link"><i class="cv-icons fa-solid fa-gears"></i><br/>
            Compétences
          </Link>
        </li>
      </ul>
    </div>
  );
}
