import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/aboutus">Qui sommes nous ?</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="try-button">Essayer gratuitement</button>
          <button className="demo-button">Demander une démo</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
