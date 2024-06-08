import React from "react";
import "./Installation.css";

function Installation() {
  return (
    <div className="installation">
      <div className="installation-content">
        <div className="installation-image">
          <img src="path-to-image.jpg" alt="Installation Image" />
        </div>
        <div className="installation-text">
          <h2 className="installation-title">
            Comment installer One Simple Click ?
          </h2>
          <ol>
            <li>Ouvrez votre logiciel Word</li>
            <li>
              Dans l'onglet <b>Accueil</b>, cliquez sur <b>Compléments</b>
            </li>
            <li>
              Dans la barre de recherche, tapez <b>One Simple Click</b>
            </li>
            <li>
              Cliquez sur <b>Ajouter</b> et profitez de notre outil
            </li>
          </ol>
          <button className="installation-button">S'inscrire</button>
        </div>
      </div>
    </div>
  );
}

export default Installation;
