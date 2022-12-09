import React from "react";
import Badge from 'react-bootstrap/Badge';

const ProjetsCard = ({ item }) => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="container-projets-cards">
                {item.map((projet) => {
                    return (
                        <a
                            href="/Portfolio/projets"
                            onClick={() => openInNewTab(projet.url)}
                            key={projet.id}
                        >
                            <div className="bloc-card">
                                <div className="projet-card">
                                    <div className="projet-card-visual-aspect">
                                        <img className="projet-card-img" src={projet.img} alt={projet.title} />
                                        <div className="projet-card-info">
                                            <p>{projet.title}</p>
                                            <Badge bg={projet.type === "Front-End" ? "success" : projet.type === "Back-End" ? "warning" : "primary"} text="light">{projet.type}</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="back-card"></div>
                            </div>
                        </a>
                    );
                })}
        </div>
    )
}

export default ProjetsCard;