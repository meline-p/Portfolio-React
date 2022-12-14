import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ExperienceProData from "../../data/ExperienceProData";

export default function ExperiencePro() {
  return (
    <section>
      <div className="cv-components">
        <div className="container-bg-xp">
          <h1 className="comp-title">Expérience Professionnelle</h1>

          <div className="container-xp">
            {ExperienceProData.map((xp) => (
              <div>
                <div className="container-job">
                  <h3 className="job-name">{xp.job}</h3>
                  <div>

                    <h4 className="job-company"><img className="job-img" src={xp.img} alt={xp.company} />  {xp.company} <span>- {xp.place}</span></h4>
                  </div>

                  <h5 className="job-year">{xp.year} <span>{xp.timeLength}</span></h5>
                  <p className="job-body">{xp.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* <div className="cv-list-job">
          <Accordion defaultActiveKey="6">
            {ExperienceProData.map((xp) => (
              <Accordion.Item eventKey={xp.id}>
                <Accordion.Header className="job-header">
                  <div className="job-header-container">
                    <div className="job-header-container-img">
                      <img className="job-img" src={xp.img} alt={xp.company} />
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

        </div> */}
      </div>
    </section>
  );
}