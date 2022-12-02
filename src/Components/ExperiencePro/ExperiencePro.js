import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function ExperiencePro() {
  return (
    <section>
      <div className="cv-components">
        <h1 className="cv-titre-components">Expérience Professionnelle</h1>

        <div className="cv-list-job">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="job-header">
                <h3 className="job-name">
                  Grooming / CFX Artist <br />
                  <span className="job-company">Illumination McGuff</span>
                  <br />
                  <span className="job-year">2021-2022</span>
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                Réalisation des Hairs et du Hair Shader d'une vingtaine de
                personnages pour un film <br /> Environnement Linux, Symbor, Mari,
                InK
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3 className="job-name">
                  Grooming Artist / Modeling <br />
                  <span className="job-company">CG-Animation</span>
                  <br />
                  <span className="job-year">2020</span>
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                Réalisation d'une bande-annonce pour une série (Blender) <br />{" "}
                Grooming de quatre personnages et modeling du personnage féminin
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
