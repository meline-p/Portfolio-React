import React from "react";
import projetsData from "../../data/projetsData";

const ProjetsButtons = ({ filterItem, setItem, menuItems }) => {
    return (
        <div className="d-flex justify-content-center container-projets-buttons">
            {menuItems.map((Val, id) => {
                return (
                    <button
                        className="btn-outline-dark btn projets-buttons"
                        onClick = {() => filterItem(Val)}
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
        </div>
    )
}

export default ProjetsButtons;