import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Formation() {
  return (
    <div className="cv-components">
      <h1 className="cv-titre-components">Formation</h1>

      <div className="cv-list-formation">
      <CardGroup>
        <Card border="light formation-card" style={{ width: "18rem" }}>
          <Card.Body className="formation-body">
            <p className="formation-year">2018-2021</p>
            <p><span className="formation-icon"><i class="fa-solid fa-award"></i></span></p>
            <h4>Master Concepteur Réalisateur 3D</h4>
            <h6>MoPA</h6>
          </Card.Body>
        </Card>

        <Card border="light formation-card" style={{ width: "18rem" }}>
          <Card.Body className="formation-body">
            <p className="formation-year">2016-2018</p>
            <p><span className="formation-icon"><i class="fa-solid fa-award"></i></span></p>
            <h4>BTS Design Graphique <br /> Communication des Médias Numériques</h4>
            <h6>Lycée La Tourrache</h6>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    </div>
  );
}
