import React from "react";
import {Link} from "react-router-dom";

export default function Services() {
    return (
        <div className="container-services">
            <h1>Portfolio</h1>
            <div className="container-services-item">
                <div className="container-item dev">
                    <Link to="/Portfolio/projets"  style={{ textDecoration: 'none' }}>
                        <img src="https://www.numerama.com//content/uploads/2015/09/codesourcelignes.jpg" alt="" />
                        <h2>Développement Web</h2>
                        <p>Projets Front-End, Back-End et Full-Stack</p>
                    </Link>
                </div>
                <div className="container-item 3d">
                    <Link  to="/Portfolio/" style={{ textDecoration: 'none' }}>
                        <img src="https://static.wixstatic.com/media/8d843e_759c312a6093443b80b5739249011684~mv2.png/v1/crop/x_0,y_137,w_2200,h_2664/fill/w_983,h_1169,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Rajah_compo_02.png" alt="" />
                        <h2>Artiste 3D</h2>
                        <p>Projets Spécialisés en Grooming</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}