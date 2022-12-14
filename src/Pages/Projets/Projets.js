import React, { useState } from "react";
import projetsData from "../../data/projetsData"
import ProjetsCard from "../../Components/ProjetsCard/ProjetsCard";
import ProjetsButtons from "../../Components/ProjetsCard/ProjetsButtons";
import Footer from "../../Components/Footer/Footer";

export default function Projets() {

  const [item, setItem] = useState(projetsData);

  const menuItems = [...new Set(projetsData.map((projet) => projet.type))];

  const filterItem = (currentType) => {
    const newItem = projetsData.filter((newVal) => {
      return newVal.type === currentType;
    });
    setItem(newItem);
  }

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL + "Portfolio/" || "Portfolio/";

  // const openInNewTab = url => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return (
    <div>

      {/* <div className="featured-project-container">
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
      </div> */}

      <div>
        <div className="container-projets-header">
          <h3 className="container-projets-title">Projets</h3>
          <div className="container-projets-buttons">
            <ProjetsButtons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
          </div>
        </div>
        <ProjetsCard item={item} />
      </div>

      <Footer />
    </div>

  );
}
