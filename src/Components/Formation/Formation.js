import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import FormationData from "../../data/FormationData";

export default function Formation() {
  return (
    <div className="cv-components">
      <h1 className="comp-title">Formation</h1>

      <div className="container-formation">
        {FormationData.map(diploma => (
          <div>
            <div className="container-school">
              <h3 className="formation-diploma">{diploma.diploma}</h3>
              <h6 className="formation-school">{diploma.school}</h6>
              <p className="formation-year">{diploma.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="cv-list-formation">
        {FormationData.map(diploma => (
          <CardGroup>
            <Card border="light formation-card">
              <Card.Body className="formation-body">
                <div className="formation-content">
                  <p className="formation-year">{diploma.year}</p>
                  <p><span className="formation-icon"><i class="fa-solid fa-award"></i></span></p>
                  <h4>{diploma.diploma}</h4>
                  <h6>{diploma.school}</h6>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div> */}
    </div>
  );
}
