import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

export const NavbarComponent = () => (
  <nav className="navbar-container">
    <div className="logo-container">
      <Link to="/" className="logo">
        Falcor's Quest
      </Link>
    </div>
    <div className="right-links-container">
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/gallery" className="nav-link">
        Gallery
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://give.worldbicyclerelief.org/fundraiser/2780432"
        className="nav-link"
      >
        Donate
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/falcorsquest/?r=nametag"
        className="nav-link fa-icon"
      >
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
    </div>
  </nav>
);
