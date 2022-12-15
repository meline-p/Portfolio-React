import React from "react";
import projetsData from "../../data/projetsData";

const ProjetsButtons = ({ filterItem, setItem, menuItems }) => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="d-flex justify-content-center container-projets-buttons">
            {menuItems.map((Val, id) => {
                return (
                    <button
                        className="btn-outline-dark btn projets-buttons"
                        onClick={() => filterItem(Val)}
                        key={id}
                    >
                        {Val}
                    </button>
                );
            })}
            <button
                className="btn-outline-dark btn projets-buttons"
                onClick={() => setItem(projetsData)}
            >
                All
            </button>
            <button
                className="btn-outline-warning btn projets-buttons"
                onClick={() => openInNewTab("https://melinepischedda.wixsite.com/portfolio/portfolio")}
            >
               Projets 3D
            </button>
        </div>
    )
}

export default ProjetsButtons;