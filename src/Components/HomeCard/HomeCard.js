import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


export default function HomeCard() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL + "Portfolio/" || "Portfolio/";

  return (
    <CardGroup className="home-cards">
      <Card className="profile" >
        <Card.Body className="profile-body">
          <img src={process.env.PUBLIC_URL + "/images/meline.png"}
            className="profile-img-top"
            alt="profil-picture" />
          <h5 className="profile-title">Méline <br /> Pischedda</h5>
          <hr className="solid" />
          <h6 className="profile-text">DEVELOPPEUSE WEB</h6>
        </Card.Body>
        <Card.Footer className="profile-footer">
          <a href="#" className="profile-link">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="profile-link">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" className="profile-link">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </Card.Footer>
      </Card>

      <div className="presentation" >
        <div className="presentation-body">
          <h5 className="presentation-titre">Hello</h5>
          <h6 className="presentation-job">Je suis développeuse Web et Artist 3D</h6>
          <a href="/Portfolio/cv" className="btn btn-primary btn-cv">CV</a>
          <a href="/Portfolio/projets" className="btn btn-outline-dark btn-projets">PROJETS</a>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </CardGroup>
  );
}
