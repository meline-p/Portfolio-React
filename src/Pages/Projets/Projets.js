import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import frontProjetsData from "../../data/FrontProjetsData"
import backProjetsData from "../../data/BackProjetsData"
import fullStackProjetsData from "../../data/FullStackProjetsData"
import { Link } from "react-router-dom";

export default function Projets() {
  return (
    <div>

      <div className="featured-project">
        <img
          className="featured-project-img"
          src="https://kinsta.com/fr/wp-content/uploads/sites/4/2021/12/what-is-a-full-stack-developer.png"
          alt="projet à la une"
        />
        <div className="featured-project-infos">
          <h2>Nom du Projet</h2>
          <span>Full-Stack</span>
          <p>
            at. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl onsequat. Duis autem vel eelenit
          </p>
          <button className="btn btn-light">Voir le projet</button>
        </div>
      </div>



      <h3 className="projet-type full-stack">Full-Stack</h3>
      <div className="container-projets full-stack">
        {fullStackProjetsData.map((projet) => (
          <a
            href={projet.url}
            key={projet.id}
          >
            <div className="bloc-card">
              <div className="projet-card">
                <div className="visual-aspect">
                  <img className="img-projet" src={projet.img} />
                  <div className="info">
                    <p>{projet.title}</p>
                  </div>
                </div>
              </div>
              <div className="back-card"></div>
            </div>
          </a>
        ))}
      </div>

      <hr className="projets-divider"></hr>

      <h3 className="projet-type front-end">Front-End</h3>
      <div className="container-projets front-end">
        {frontProjetsData.map((projet) => (
          <a
            href={projet.url}
            key={projet.id}
          >
            <div className="bloc-card">
              <div className="projet-card">
                <div className="visual-aspect">
                  <img className="img-projet" src={projet.img} />
                  <div className="info">
                    <p>{projet.title}</p>
                  </div>
                </div>
              </div>
              <div className="back-card"></div>
            </div>
          </a>
        ))}
      </div>

      <hr className="projets-divider"></hr>

      <h3 className="projet-type back-end">Back-End</h3>
      <div className="container-projets back-end">
        {backProjetsData.map((projet) => (
          <a
            href={projet.url}
            key={projet.id}
          >
            <div className="bloc-card">
              <div className="projet-card">
                <div className="visual-aspect">
                  <img className="img-projet" src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
                  <div className="info">
                    <p>{projet.title}</p>
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
