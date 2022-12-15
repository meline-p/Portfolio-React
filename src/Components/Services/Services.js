import React from "react";
import { Link } from "react-router-dom";

export default function Services() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="container-services">
            <h1>Portfolio</h1>
            <div className="container-services-item">
                <div className="container-item dev">
                    <Link to="/Portfolio/projets" style={{ textDecoration: 'none' }}>
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Développement Web" />
                        <h2>Développement Web</h2>
                        <p>Projets Front-End, Back-End et Full-Stack</p>
                    </Link>
                </div>
                <div className="container-item 3d">
                    <a href="/Portfolio" onClick={() => openInNewTab("https://melinepischedda.wixsite.com/portfolio")}>
                        <img src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.6435-9/120018768_10157227258165689_5630863612199507915_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=3fisF2a7kNsAX_WExsR&_nc_ht=scontent-mrs2-2.xx&oh=00_AfDISlLaGWik5cocKj2tk2sAI0vbbgAC3uN66xI7nyZNjA&oe=63C20DCE" alt="3D" />
                        <h2>Projets 3D</h2>
                        <p>Projets Spécialisés en Grooming</p>
                    </a>
                </div>
            </div>

        </div>
    )
}