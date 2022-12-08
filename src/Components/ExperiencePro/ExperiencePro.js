import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ExperienceProData from "../../data/ExperienceProData";

export default function ExperiencePro() {
  return (
    <section>
      <div className="cv-components">
        <h1 className="cv-titre-components">Expérience Professionnelle</h1>

        <div className="cv-list-job">
          <Accordion defaultActiveKey="6">
            {ExperienceProData.map((xp) => (
              <Accordion.Item eventKey={xp.id}>
                <Accordion.Header className="job-header">
                  <div className="job-header-container">
                    <div className="job-header-container-img">
                      <img className="job-img" src={xp.img} />
                    </div>
                    <div className="job-header-container-infos">
                      <h3 className="job-name">
                        {xp.job} <br />
                        <span className="job-company">{xp.company} - {xp.place}</span>
                        <br />
                        <span className="job-year">{xp.year} {xp.timeLength}</span>
                      </h3>
                    </div>

                  </div>

                </Accordion.Header>
                <Accordion.Body>
                  <div className="job-body">
                    {xp.description}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
}