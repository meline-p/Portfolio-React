import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Competences() {
  return (
    <div className="cv-components">
      <h1 className="cv-titre-components">Compétences</h1>
      <div className="cv-competences-tabs">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title=<i class="fa-solid fa-code"></i>>
            <CardGroup>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Front-End</Card.Title>
                  <Card.Text>
                    <i class="fa-brands fa-html5"></i>{" "}
                    <i class="fa-brands fa-css3-alt"></i>{" "}
                    <i class="fa-brands fa-square-js"></i>{" "}
                    <i class="fa-brands fa-sass"></i>{" "}
                    <i class="fa-brands fa-bootstrap"></i>{" "}
                    <i class="fa-brands fa-react"></i>{" "}
                    <i class="fa-brands fa-wordpress"></i>, JQuery
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Back-End</Card.Title>
                  <Card.Text>
                    <i class="fa-brands fa-node-js"></i>{" "}
                    <i class="fa-brands fa-php"></i>, Express.js, APIs, EJS,
                    MySQL, MongoDB, Mongoose, Authentification, Sécurité
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Hebergement / Version</Card.Title>
                  <Card.Text>
                    <i class="fa-brands fa-git"></i>{" "}
                    <i class="fa-brands fa-github"></i>, Heroku, MongoDB Atlas
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Tab>

          <Tab eventKey={2} title=<i class="fa-solid fa-computer"></i>>
            <CardGroup>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Grooming</Card.Title>
                  <Card.Text>
                    Maya (Yeti, XGen), Houdini, Blender, Symbor
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Autres</Card.Title>
                  <Card.Text>
                    ZBrush, Nuke, Mari, 3DSMax, Substance Painter & Designer,
                    Marvelous Designer
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Adobe Suite</Card.Title>
                  <Card.Text>
                    Photoshop, InDesign, Illustrator, AfterEffects, PremierePro,
                    MediaEncoder
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Tab>
          <Tab eventKey={3} title=<i class="fa-solid fa-language"></i>>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>Français - Native</Card.Text>
                <Card.Text>Anglais - Courant</Card.Text>
                <Card.Text>Espagnol - Intermédiaire</Card.Text>
                <Card.Text>Italien - Débutante</Card.Text>
                <Card.Text>Coréen - Débutante</Card.Text>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
