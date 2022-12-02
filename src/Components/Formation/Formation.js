import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Formation() {
  return (
    <div className="cv-components">
      <h1 className="cv-titre-components">Formation</h1>

      <div className="cv-list-formation">
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>2018-2021</Card.Text>
            <Card.Title>Master Concepteur Réalisateur 3D</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">MoPA</Card.Subtitle>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>2016-2018</Card.Text>
            <Card.Title>
              BTS Design Graphique <br /> Communication des Médias Numériques
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lycée La Tourrache
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    </div>
  );
}
