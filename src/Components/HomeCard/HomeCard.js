import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";

export default function HomeCard() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL + "Portfolio/" || "Portfolio/";

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container-home-cards">
      <CardGroup className="home-cards">

        <div className="container-profile">
          <Card>
            <Card.Body className="profile-body">
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH6lmXBz0ktOQ/profile-displayphoto-shrink_200_200/0/1638373279287?e=1675900800&v=beta&t=hWwZjHtSs2_MEPP0_hVI8ubEUzdquoHqpFMS48EGf9Q"
                className="profile-img-top"
                alt="profil" />
              <h5 className="profile-title">Méline <br /> Pischedda</h5>
              <hr className="solid" />
              <h6 className="profile-text">DEVELOPPEUSE WEB</h6>
            </Card.Body>
            <Card.Footer className="profile-footer">
              <a href="/Portfolio" onClick={() => openInNewTab("https://www.linkedin.com/in/melinepischedda/")} className="profile-link">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="/Portfolio" onClick={() => openInNewTab("https://github.com/meline-p")} className="profile-link">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="/Portfolio" onClick={() => openInNewTab("https://www.instagram.com/melinepischedda/")} className="profile-link">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </Card.Footer>
          </Card>
        </div>

        <div className="container-presentation" >
          <div className="presentation-body">
            <h5 className="presentation-titre">Hello</h5>
            <h6 className="presentation-job">Je suis développeuse Web et Artist 3D</h6>
            <Link to="/Portfolio/cv" className="btn btn-primary btn-cv">CV</Link>
            <Link to="/Portfolio/projets" className="btn btn-outline-dark btn-projets">PROJETS</Link>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

      </CardGroup>
    </div>
  );
}
