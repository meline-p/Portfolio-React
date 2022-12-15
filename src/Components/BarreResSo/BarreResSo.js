import React from "react";
import Navbar from 'react-bootstrap/Navbar';

export default function BarreResSo() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="container-reseaux-sociaux">

            <Navbar bg="light" style={{ width: "50px" }}>
                <div className="container-link">
                    <div className="container-link-item">
                        <a href="/Portfolio" onClick={() => openInNewTab("https://www.linkedin.com/in/melinepischedda/")} className="profile-link">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="/Portfolio" onClick={() => openInNewTab("https://github.com/meline-p")} className="profile-link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="/Portfolio" onClick={() => openInNewTab("https://www.instagram.com/melinepischedda/")} className="profile-link">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </Navbar>

        </div>
    )
}