import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

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

      <div className="card-projects full-stack">
        <h3>Full Stack</h3>
        <CardGroup className="projets-card-groups">
          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>
        </CardGroup>
      </div>

      <div className="card-projects front-end">
        <h3>Front-End</h3>
        <CardGroup className="projets-card-groups">
          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>
        </CardGroup>
      </div>

      <div className="card-projects back-end">
        <h3>Back-End</h3>
        <CardGroup className="projets-card-groups">
          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>

          <Card className="card-projects-item" border="light" style={{ width: "18rem" }}>
            <Card.Img src="https://www.springboard.com/blog/wp-content/uploads/2021/10/Essential-Full-Stack-Developer-Skills-scaled.jpg" />
            <h5 className="card-projects-item-title">
              Nom du Projet
            </h5>
          </Card>
        </CardGroup>
      </div>
    </div>

  );
}
