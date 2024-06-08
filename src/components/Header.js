import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          L'addin Word des professionnels du droit pour gagner du temps en un
          simple clic
        </h1>
        <p className="header-description">
          One Simple Click simplifie la rédaction et la gestion des documents
          juridiques. En un simple clic, accédez à des fonctionnalités avancées
          de mise en forme, d'identification des références juridiques et des
          éléments clés. Simplifiez votre quotidien et optimisez votre
          productivité avec notre addin dédié aux avocats et aux professionnels
          du droit.
        </p>
        <div className="header-buttons">
          <button className="try-button">Essayer gratuitement</button>
          <button className="demo-button">Demander une démo</button>
        </div>
        <p className="trial-info">*Essai de 3 mois gratuit, puis 10€/mois</p>
      </div>
      <div className="header-image">
        <img src="your-image-path.jpg" alt="Description" />
      </div>
    </header>
  );
}

export default Header;
