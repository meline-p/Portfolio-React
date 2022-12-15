import React from "react";
import ExperiencePro from "../../Components/ExperiencePro/ExperiencePro";
import Formation from "../../Components/Formation/Formation";
import Competences from "../../Components/Compétences/Competences";
import Footer from "../../Components/Footer/Footer";
// import NavbarCV from "../../Components/NavbarCV/NavbarCV";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Link } from "react-router-dom";

export default function CV() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container-cv">
      {/* <Router>
        <NavbarCV />
        <Switch>
          <Route exact path="/Portfolio/cv" component={ExperiencePro} />
          <Route exact path="/Portfolio/cv/formation"  component={Formation} />
          <Route exact path="/Portfolio/cv/competences"  component={Competences} />
        </Switch>
      </Router> */}
      <div className="container-profil-info">
        <div className="container-profil-header">
          <h2 className="profil-info-titre">
            Hello, je suis Méline, Développeuse Web et Artiste 3D.
          </h2>
          <p className="profil-intro">
            Polyvalente, je suis diplômée en <span>Architecture d'intérieur</span>, en <span>Design Graphique</span> et en <span>Conception / Réalisation 3D</span>. <br />
          </p>
        </div>

        <div className="container-profil-body">

          <p className="profil-dev">
            <span>Profil Dev</span> <br />
            J'ai toujours été intriguée par la programmation. J'ai eu l'occasion de découvrir les bases durant mes études, et, très curieuse, j'ai décidé de me former en autodidacte sur le métier de Developpeur Web. <br />
            J'ai eu l'occasion de suivre des formations sur du front-end, mais également sur du back-end. Effectivement, les deux cotés sont intéressants.
            <br /> Créative, le front-end me permet d'être capable d'exploiter et de créer les différents design qui m'interpellent.
            De nature organisée, le back-end m'apporte la structure et la gestion des bases de données, sujets que je trouve très captivant.
          </p>
          <p className="profil-3d">
            <span>Profil 3D</span> <br />
            Grâce à ma formation à MoPA, j'ai eu l'opportunité de connaître tous les rôles qui font partie d'un film d'animation, en réalisant un film d'une minute en solo, et plusieurs films en équipe.
            <br /> Je suis spécialisée en Grooming (cheveux, fourrure et plumes), mais je suis à l'aise avec tous les différents départements en image en 3D.
            J'utilise principalement Maya, Houdini, Blender et 3DSMax.
            <br /> Les connaissances acquises à Illumination McGuff en Grooming et en CFX ont été très bénéfiques et m'ont donné une réelle expérience dans la Production d'un film et les liens essentiels à connaître entre chaque départements.
          </p>

          <p className="profil-footer">
            <hr />
            <br />
            Pendant mon temps libre, j'aime beaucoup travailler sur des projets personnels et apprendre des langues étrangères.
            <br /> <br /> Si vous souhaitez en savoir plus sur mon parcours ou mes compétences, n'hésitez pas à jeter un œil à mon CV, mes 
            <span><Link className="profil-footer-dev" to="/Portfolio/projets" style={{ textDecoration: 'none' }}> projets en Développement Web</Link></span> et mes 
            <span><a className="profil-footer-3d" href="/Portfolio/cv" onClick={() => openInNewTab("https://melinepischedda.wixsite.com/portfolio")}> projets en 3D</a></span>, j'espère qu'il vous plaira !
          </p>

        </div>

      </div>
      <Competences />
      <ExperiencePro />
      <Formation />
      <Footer />
    </div>
  );
}
