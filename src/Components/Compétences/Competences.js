import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Competences() {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <div className="cv-components">
      <h1 className="cv-titre-components">Compétences</h1>
      <div className="cv-competences-tabs">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title=<i class="fa-solid fa-code"></i>>
            <CardGroup>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Front-End</h4>
                  <p>
                    <i class="fa-brands fa-html5"></i>{" "}
                    <i class="fa-brands fa-css3-alt"></i>{" "}
                    <i class="fa-brands fa-square-js"></i>{" "}
                    <i class="fa-brands fa-sass"></i>{" "}
                    <i class="fa-brands fa-bootstrap"></i>{" "}
                    <i class="fa-brands fa-react"></i>{" "}
                    <i class="fa-brands fa-wordpress"></i>
                    <img src={process.env.PUBLIC_URL + `/images/jQuery-logo.png`}
                      className="competences-logo"
                      alt="jQuery" />
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Back-End</h4>
                  <p>
                    <i class="fa-brands fa-node-js"></i> <i class="fa-brands fa-php"></i>
                    <img src={process.env.PUBLIC_URL + `/images/expressjs-logo.png`}
                      className="competences-logo"
                      alt="express.js" />
                    <img src={process.env.PUBLIC_URL + `/images/ejs-logo.png`}
                      className="competences-logo"
                      alt="EJS" />
                    <img src={process.env.PUBLIC_URL + `/images/mysql-logo.png`}
                      className="competences-logo"
                      alt="MySQL" />
                    <img src={process.env.PUBLIC_URL + `/images/mongodb-logo.png`}
                      className="competences-logo"
                      alt="MongoDB" />
                    <img src={process.env.PUBLIC_URL + `/images/mongoose-logo.png`}
                      className="competences-logo"
                      alt="Mongoose" />
                    <i class="fa-solid fa-user-lock"></i> <i class="fa-solid fa-user-shield"></i> APIs
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Hebergement / Version</h4>
                  <p>
                    <i class="fa-brands fa-git"></i>{" "}
                    <i class="fa-brands fa-github"></i>
                    <img src={process.env.PUBLIC_URL + `/images/heroku-logo.png`}
                      className="competences-logo"
                      alt="Heroku" />
                    <img src={process.env.PUBLIC_URL + `/images/mongodbatlas-logo.png`}
                      className="competences-logo"
                      alt="MongoDB Atlas" />
                  </p>
                </Card.Body>
              </Card>
            </CardGroup>
          </Tab>

          <Tab eventKey={2} title=<i class="fa-solid fa-computer"></i>>
            <CardGroup>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Grooming</h4>
                  <p>
                    <img src={process.env.PUBLIC_URL + `/images/maya-logo.png`}
                      className="competences-logo"
                      alt="Maya" />
                    <img src={process.env.PUBLIC_URL + `/images/yeti-logo.png`}
                      className="competences-logo"
                      alt="Yeti" />
                    <img src={process.env.PUBLIC_URL + `/images/houdini-logo.png`}
                      className="competences-logo"
                      alt="Houdini" />
                    <img src={process.env.PUBLIC_URL + `/images/blender-logo.png`}
                      className="competences-logo"
                      alt="Blender" />
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Autres</h4>
                  <p>
                    <img src={process.env.PUBLIC_URL + `/images/zbrush-logo.png`}
                      className="competences-logo"
                      alt="ZBrush" />
                    <img src={process.env.PUBLIC_URL + `/images/3dsmax-logo.png`}
                      className="competences-logo"
                      alt="3DSMax" />
                    <img src={process.env.PUBLIC_URL + `/images/nuke-logo.png`}
                      className="competences-logo"
                      alt="Nuke" />
                    <img src={process.env.PUBLIC_URL + `/images/mari-logo.png`}
                      className="competences-logo"
                      alt="Mari" />
                    <img src={process.env.PUBLIC_URL + `/images/substancepainter-logo.png`}
                      className="competences-logo"
                      alt="Substance Painter" />
                    <img src={process.env.PUBLIC_URL + `/images/substancedesigner-logo.png`}
                      className="competences-logo"
                      alt="Substance Designer" />
                    <img src={process.env.PUBLIC_URL + `/images/marvelousdesigner-logo.png`}
                      className="competences-logo"
                      alt="Marvelous Designer" />
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Adobe Suite</h4>
                  <p>
                    <img src={process.env.PUBLIC_URL + `/images/photoshop-logo-03.png`}
                      className="competences-logo"
                      alt="Photoshop" />
                    <img src={process.env.PUBLIC_URL + `/images/indesign-logo-03.png`}
                      className="competences-logo"
                      alt="InDesign" />
                    <img src={process.env.PUBLIC_URL + `/images/illustrator-logo-03.png`}
                      className="competences-logo"
                      alt="Illustrator" />
                    <img src={process.env.PUBLIC_URL + `/images/aftereffects-logo-03.png`}
                      className="competences-logo"
                      alt="After Effects" />
                    <img src={process.env.PUBLIC_URL + `/images/premierepro-logo-03.png`}
                      className="competences-logo"
                      alt="Premiere Pro" />
                    <img src={process.env.PUBLIC_URL + `/images/mediaencoder-logo-03.png`}
                      className="competences-logo"
                      alt="Media Encoder" />
                  </p>
                </Card.Body>
              </Card>
            </CardGroup>
          </Tab>
          <Tab eventKey={3} title=<i class="fa-solid fa-language"></i>>
            <CardGroup>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-languagues">
                  <div className="languagues-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" />
                    <h4>Bonjour</h4>
                    <p>Native</p>
                  </div>
                </Card.Body>

                <Card.Body className="competences-languagues">
                  <div className="languagues-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" />
                    <h4>Hello</h4>
                    <p>Courant</p>
                  </div>
                </Card.Body>

                <Card.Body className="competences-languagues">
                  <div className="languagues-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" />
                    <h4>Holà</h4>
                    <p>Intermédiaire</p>
                  </div>
                </Card.Body>

                <Card.Body className="competences-languagues">
                  <div className="languagues-card">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" />
                    <h4>Buongiorno</h4>
                    <p>Débutante</p>
                  </div>
                </Card.Body>

                <Card.Body className="competences-languagues">
                  <div className="languagues-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png" />
                    <h4>안녕하세요</h4>
                    <p>Débutante</p>
                  </div>
                </Card.Body>
              </Card>
            </CardGroup>

          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
