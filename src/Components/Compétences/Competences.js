import React from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";

// import jQuery from "https://meline-p.github.io/Ressources/images/Logo/jQuery-logo.png";
// import expressJs from "https://meline-p.github.io/Ressources/images/Logo/expressjs-logo.png";
// import EJS from "https://meline-p.github.io/Ressources/images/Logo/ejs-logo.png";
// import MySQL from "https://meline-p.github.io/Ressources/images/Logo/mysql-logo.png";
// import MongoDB from "https://meline-p.github.io/Ressources/images/Logo/mongodb-logo.png";
// import Mongoose from "https://meline-p.github.io/Ressources/images/Logo/mongoose-logo.png";
// import Heroku from "https://meline-p.github.io/Ressources/images/Logo/heroku-logo.png";
// import MongoDBAtlas from "https://meline-p.github.io/Ressources/images/Logo/mongodbatlas-logo.png";

// import Maya from "https://meline-p.github.io/Ressources/images/Logo/maya-logo.png"
// import Yeti from "https://meline-p.github.io/Ressources/images/Logo/yeti-logo.png"
// import Houdini from "https://meline-p.github.io/Ressources/images/Logo/houdini-logo.png"
// import Blender from "https://meline-p.github.io/Ressources/images/Logo/blender-logo.png"
// import zBrush from "https://meline-p.github.io/Ressources/images/Logo/zbrush-logo.png"
// import DSMax from "https://meline-p.github.io/Ressources/images/Logo/3dsmax-logo.png"
// import Nuke from  "https://meline-p.github.io/Ressources/images/Logo/nuke-logo.png"
// import Mari from  "https://meline-p.github.io/Ressources/images/Logo/mari-logo.png"
// import SubstancePainter from  "https://meline-p.github.io/Ressources/images/Logo/substancepainter-logo.png"
// import SubstanceDesigner from  "https://meline-p.github.io/Ressources/images/Logo/substancedesigner-logo.png"
// import Marvelous from "https://meline-p.github.io/Ressources/images/Logo/marvelousdesigner-logo.png"
// import Photoshop from "https://meline-p.github.io/Ressources/images/Logo/photoshop-logo-03.png"
// import inDesign from  "https://meline-p.github.io/Ressources/images/Logo/indesign-logo-03.png"
// import illustrator from  "https://meline-p.github.io/Ressources/images/Logo/illustrator-logo-03.png"
// import AfterEffects from "https://meline-p.github.io/Ressources/images/Logo/aftereffects-logo-03.png"
// import PremierePro from "https://meline-p.github.io/Ressources/images/Logo/premierepro-logo-03.png"
// import MediaEncoder from "https://meline-p.github.io/Ressources/images/Logo/mediaencoder-logo-03.png"


export default function Competences() {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL + "Portfolio/" || "Portfolio/";

  return (
    <div className="cv-components">
      <div className="container-bg-comp">
        <h1 className="comp-title">Compétences</h1>

        <div className="container-competences">
          <div className="container-programmation">
            <h2>Programmation</h2>
            <hr />
            <div className="prog-front">
              <h4>Front-End</h4>
              <p className=" competences-container-logo">
                HTML 5, CSS 3, JavaScript ES6, Sass, Bootstrap, React, Wordpress, jQuery
                {/* <i class="animation-logo fa-brands fa-html5"></i>{" "}
              <i class="animation-logo fa-brands fa-css3-alt"></i>{" "}
              <i class="animation-logo fa-brands fa-square-js"></i>{" "}
              <i class="animation-logo fa-brands fa-sass"></i>{" "}
              <i class="animation-logo fa-brands fa-bootstrap"></i>{" "}
              <i class="animation-logo fa-brands fa-react"></i>{" "}
              <i class="animation-logo fa-brands fa-wordpress"></i>
              <img src="https://meline-p.github.io/Ressources/images/Logo/jQuery-logo.png"
                className="animation-logo competences-logo"
                alt="jQuery" /> */}
              </p>
            </div>
            <div className="prog-back">
              <h4>Back-End</h4>
              <p className=" competences-container-logo">
                Node.js, php, Express.js, EJS, MySQL, MongoDB, Mongoose, APIs, Authentification, Sécurité
                {/* <i class="animation-logo fa-brands fa-node-js"></i> <i class=" animation-logo fa-brands fa-php"></i>
              <img src="https://meline-p.github.io/Ressources/images/Logo/expressjs-logo.png"
                className=" animation-logo competences-logo"
                alt="express.js" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/ejs-logo.png"
                className=" animation-logo competences-logo"
                alt="EJS" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/mysql-logo.png"
                className=" animation-logo competences-logo"
                alt="MySQL" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/mongodb-logo.png"
                className="animation-logo competences-logo"
                alt="MongoDB" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/mongoose-logo.png"
                className="animation-logo competences-logo"
                alt="Mongoose" />
              <i class="animation-logo fa-solid fa-user-lock"></i> <i class=" animation-logo fa-solid fa-user-shield"></i> APIs */}
              </p>
            </div>
            <div className="prog-version">
              <h4>Hebergement / Version</h4>
              <p className=" competences-container-logo">
                Git, GitHub, Heroku, MongoDB Atlas
                {/* <i class="animation-logo fa-brands fa-git"></i>{" "}
              <i class="animation-logo fa-brands fa-github"></i>
              <img src="https://meline-p.github.io/Ressources/images/Logo/heroku-logo.png"
                className="animation-logo competences-logo"
                alt="Heroku" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/mongodbatlas-logo.png"
                className="animation-logo competences-logo"
                alt="MongoDB Atlas" /> */}
              </p>
            </div>
          </div>


          <div className="container-logiciels">
            <h2>Logiciels</h2>
            <hr />
            <div className="log-3d">
              <h4>Logiciels 3D</h4>
              <p className=" competences-container-logo">
                Maya, Yeti, Houdini, Blender, zBrush, 3DSMax, Nuke, Mari, Substance Painter, Substance Designer, Marvelous Designer
                {/* <img src="https://meline-p.github.io/Ressources/images/Logo/maya-logo.png"
                className="animation-logo competences-logo"
                alt="Maya" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/yeti-logo.png"
                className="animation-logo competences-logo"
                alt="Yeti" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/houdini-logo.png"
                className="animation-logo competences-logo"
                alt="Houdini" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/blender-logo.png"
                className="animation-logo competences-logo"
                alt="Blender" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/zbrush-logo.png"
                className="animation-logo competences-logo"
                alt="ZBrush" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/3dsmax-logo.png"
                className="animation-logo competences-logo"
                alt="3DSMax" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/nuke-logo.png"
                className="animation-logo competences-logo"
                alt="Nuke" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/mari-logo.png"
                className="animation-logo competences-logo"
                alt="Mari" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/substancepainter-logo.png"
                className="animation-logo competences-logo"
                alt="Substance Painter" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/substancedesigner-logo.png"
                className="animation-logo competences-logo"
                alt="Substance Designer" />
              <img src="https://meline-p.github.io/Ressources/images/Logo/marvelousdesigner-logo.png"
                className="animation-logo competences-logo"
                alt="Marvelous Designer" /> */}
              </p>
            </div>
            <div className="log-2d"></div>
            <h4>Adobe Suite</h4>
            <p className="competences-container-logo">
              Photoshop, inDesign, Illustrator, After Effects, Premiere Pro, Media Encoder
              {/* <img src="https://meline-p.github.io/Ressources/images/Logo/photoshop-logo-03.png"
              className="animation-logo competences-logo"
              alt="Photoshop" />
            <img src="https://meline-p.github.io/Ressources/images/Logo/indesign-logo-03.png"
              className="animation-logo competences-logo"
              alt="InDesign" />
            <img src="https://meline-p.github.io/Ressources/images/Logo/illustrator-logo-03.png"
              className="animation-logo competences-logo"
              alt="Illustrator" />
            <img src="https://meline-p.github.io/Ressources/images/Logo/aftereffects-logo-03.png"
              className="animation-logo competences-logo"
              alt="After Effects" />
            <img src="https://meline-p.github.io/Ressources/images/Logo/premierepro-logo-03.png"
              className="animation-logo competences-logo"
              alt="Premiere Pro" />
            <img src="https://meline-p.github.io/Ressources/images/Logo/mediaencoder-logo-03.png"
              className="animation-logo competences-logo"
              alt="Media Encoder" /> */}
            </p>
          </div>

          <div className="container-langues">
            <h2>Langues</h2>
            <hr />
            <div className="langues">
              <div>Bonjour - Native</div>
              <div>Hello - Courant</div>
              <div>Holà - Intermédiaire</div>
              <div>Buongiorno - Débutante</div>
              <div>안녕하세요 - Débutante</div>

              {/* <div className="languagues-card">
              <img alt="French Flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" />
              <h4>Bonjour</h4>
              <p>Native</p>
            </div>

            <div className="languagues-card">
              <img alt="English Flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" />
              <h4>Hello</h4>
              <p>Courant</p>
            </div>

            <div className="languagues-card">
              <img alt="Spanish Flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" />
              <h4>Holà</h4>
              <p>Intermédiaire</p>
            </div>

            <div className="languagues-card">
              <img alt="Italian Flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" />
              <h4>Buongiorno</h4>
              <p>Débutante</p>
            </div>

            <div className="languagues-card">
              <img alt="Korean Flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png" />
              <h4>안녕하세요</h4>
              <p>Débutante</p>
            </div> */}

            </div>
          </div>
        </div>

        {/* <h1 className="cv-titre-components">Compétences</h1>
      <div className="cv-competences-tabs">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title=<h2 className="competences-title"><i class="fa-solid fa-code"></i> Programmation</h2>>
            <CardGroup>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Front-End</h4>
                  <p className="animation-logo competences-container-logo">
                    <i class="animation-logo fa-brands fa-html5"></i>{" "}
                    <i class="animation-logo fa-brands fa-css3-alt"></i>{" "}
                    <i class="animation-logo fa-brands fa-square-js"></i>{" "}
                    <i class="animation-logo fa-brands fa-sass"></i>{" "}
                    <i class="animation-logo fa-brands fa-bootstrap"></i>{" "}
                    <i class="animation-logo fa-brands fa-react"></i>{" "}
                    <i class="animation-logo fa-brands fa-wordpress"></i>
                    <img src="https://meline-p.github.io/Ressources/images/Logo/jQuery-logo.png"
                      className="animation-logo competences-logo"
                      alt="jQuery" />
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Back-End</h4>
                  <p className="animation-logo competences-container-logo">
                    <i class="animation-logo fa-brands fa-node-js"></i> <i class=" animation-logo fa-brands fa-php"></i>
                    <img src="https://meline-p.github.io/Ressources/images/Logo/expressjs-logo.png"
                      className=" animation-logo competences-logo"
                      alt="express.js" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/ejs-logo.png"
                      className=" animation-logo competences-logo"
                      alt="EJS" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/mysql-logo.png"
                      className=" animation-logo competences-logo"
                      alt="MySQL" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/mongodb-logo.png"
                      className="animation-logo competences-logo"
                      alt="MongoDB" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/mongoose-logo.png"
                      className="animation-logo competences-logo"
                      alt="Mongoose" />
                    <i class="animation-logo fa-solid fa-user-lock"></i> <i class=" animation-logo fa-solid fa-user-shield"></i> APIs
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Hebergement / Version</h4>
                  <p className="animation-logo competences-container-logo">
                    <i class="animation-logo fa-brands fa-git"></i>{" "}
                    <i class="animation-logo fa-brands fa-github"></i>
                    <img src="https://meline-p.github.io/Ressources/images/Logo/heroku-logo.png"
                      className="animation-logo competences-logo"
                      alt="Heroku" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/mongodbatlas-logo.png"
                      className="animation-logo competences-logo"
                      alt="MongoDB Atlas" />
                  </p>
                </Card.Body>
              </Card>
            </CardGroup>
          </Tab>

          <Tab eventKey={2} title=<h2 className="competences-title"><i class="fa-solid fa-computer"></i> Logiciels 2D/3D</h2>>
            <CardGroup>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Grooming</h4>
                  <p className="animation-logo competences-container-logo">
                    <img src="https://meline-p.github.io/Ressources/images/Logo/maya-logo.png"
                      className="animation-logo competences-logo"
                      alt="Maya" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/yeti-logo.png"
                      className="animation-logo competences-logo"
                      alt="Yeti" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/houdini-logo.png"
                      className="animation-logo competences-logo"
                      alt="Houdini" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/blender-logo.png"
                      className="animation-logo competences-logo"
                      alt="Blender" />
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Autres</h4>
                  <p className="animation-logo competences-container-logo">
                    <img src="https://meline-p.github.io/Ressources/images/Logo/zbrush-logo.png"
                      className="animation-logo competences-logo"
                      alt="ZBrush" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/3dsmax-logo.png"
                      className="animation-logo competences-logo"
                      alt="3DSMax" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/nuke-logo.png"
                      className="animation-logo competences-logo"
                      alt="Nuke" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/mari-logo.png"
                      className="animation-logo competences-logo"
                      alt="Mari" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/substancepainter-logo.png"
                      className="animation-logo competences-logo"
                      alt="Substance Painter" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/substancedesigner-logo.png"
                      className="animation-logo competences-logo"
                      alt="Substance Designer" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/marvelousdesigner-logo.png"
                      className="animation-logo competences-logo"
                      alt="Marvelous Designer" />
                  </p>
                </Card.Body>
              </Card>

              <Card border="light" style={{ width: "18rem" }}>
                <Card.Body className="competences-body">
                  <h4>Adobe Suite</h4>
                  <p className="animation-logo competences-container-logo">
                    <img src="https://meline-p.github.io/Ressources/images/Logo/photoshop-logo-03.png"
                      className="animation-logo competences-logo"
                      alt="Photoshop" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/indesign-logo-03.png"
                      className="animation-logo competences-logo"
                      alt="InDesign" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/illustrator-logo-03.png"
                      className="animation-logo competences-logo"
                      alt="Illustrator" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/aftereffects-logo-03.png"
                      className="animation-logo competences-logo"
                      alt="After Effects" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/premierepro-logo-03.png"
                      className="animation-logo competences-logo"
                      alt="Premiere Pro" />
                    <img src="https://meline-p.github.io/Ressources/images/Logo/mediaencoder-logo-03.png"
                      className="animation-logo competences-logo"
                      alt="Media Encoder" />
                  </p>
                </Card.Body>
              </Card>
            </CardGroup>
          </Tab>
          <Tab eventKey={3} title=<h2 className="competences-title"><i class="fa-solid fa-language"></i> Langues</h2>>
            <CardGroup>
              <Card border="light" style={{ width: "18rem" }}>
                <div className=" container-languages">
                  <Card.Body className="competences-languagues">
                    <div className="languagues-card">
                      <img alt="French Flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" />
                      <h4>Bonjour</h4>
                      <p>Native</p>
                    </div>
                  </Card.Body>

                  <Card.Body className="competences-languagues">
                    <div className="languagues-card">
                      <img alt="English Flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" />
                      <h4>Hello</h4>
                      <p>Courant</p>
                    </div>
                  </Card.Body>

                  <Card.Body className="competences-languagues">
                    <div className="languagues-card">
                      <img alt="Spanish Flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png" />
                      <h4>Holà</h4>
                      <p>Intermédiaire</p>
                    </div>
                  </Card.Body>

                  <Card.Body className="competences-languagues">
                    <div className="languagues-card">
                      <img alt="Italian Flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png" />
                      <h4>Buongiorno</h4>
                      <p>Débutante</p>
                    </div>
                  </Card.Body>

                  <Card.Body className="competences-languagues">
                    <div className="languagues-card">
                      <img alt="Korean Flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_South_Korea_%281997%E2%80%932011%29.svg/220px-Flag_of_South_Korea_%281997%E2%80%932011%29.svg.png" />
                      <h4>안녕하세요</h4>
                      <p>Débutante</p>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </CardGroup>

          </Tab>
        </Tabs>
      </div> */}
      </div>
    </div>
  );
}
