import React from "react";
import projetsData from "../../data/projetsData"
import Badge from 'react-bootstrap/Badge';

export default function Projets() {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL + "Portfolio/" || "Portfolio/";

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>

      <div className="featured-project">
        <img
          className="featured-project-img"
          src="https://meline-p.github.io/Ressources/images/Pojets-img/Analog-App-img.png"
          alt="projet à la une"
        />
        <div className="featured-project-infos">
          <h2>Analog App</h2>
          <Badge bg="success" text="light">Front-End</Badge>
          <p>
            Javascript Challenge Project
          </p>
          <button className="btn btn-light"><a href="/Portfolio/projets" className="featured-project-button" onClick={() => openInNewTab("https://meline-p.github.io/Analog-App/")}>Voir le projet</a></button>
        </div>
      </div>

      <h3 className="projet-type front-end">Projets</h3>
      <div className="container-projets front-end">
        {projetsData.map((projet) => (
          <a
            href="/Portfolio/projets"
            onClick={() => openInNewTab(projet.url)}
            key={projet.id}
          >
            <div className="bloc-card">
              <div className="projet-card">
                <div className="visual-aspect">
                  <img className="img-projet" src={projet.img} alt={projet.title}/>
                  <div className="info">
                    <p>{projet.title}</p>
                    <Badge bg={projet.type === "Front-End" ? "success" : projet.type === "Back-End" ? "warning" : "primary"} text="light">{projet.type}</Badge>
                  </div>
                </div>
              </div>
              <div className="back-card"></div>
            </div>
          </a>
        ))}
      </div>

    </div>

  );
}


// {bg =  {projet.type} == "Front-End" ? "success" : {projet.type} == "Back-End" ? "warning"  : "primary" }
// {
//   ProjetsTypeData.map((type) => {
//     return (
//       <li><a href="#"><Badge onClick={(e) => {selectType(e.target.name)}} name={type.name} bg={isActive ? type.badgeColor : "secondary"} text="light">{type.name}</Badge></a></li>
//     )
//   })
// }