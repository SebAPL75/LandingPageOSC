import React from "react";
import "./Functionalities.css";

function Functionalities() {
  const functionalities = [
    {
      id: 1,
      title: "Identification des références juridiques",
      description:
        "Scanner automatiquement votre document pour identifier tous les articles, jurisprudences et autres sources juridiques. Contrôler que les références sont exactes et créer automatiquement des liens hypertextes vers Legifrance.",
      image: "path-to-image1.jpg",
    },
    {
      id: 2,
      title: "Mise en forme automatique des documents",
      description:
        "La mise en forme des documents vous prendre trop de temps ? Grâce à notre outil, mettez en forme vos documents en un seul clic et concentrez vous sur l'essentiel.",
      image: "path-to-image2.jpg",
    },
    {
      id: 3,
      title: "Identification des éléments clés",
      description:
        "Ayez une vision d'ensemble de tous les noms de personnes et d'entreprises, ainsi que toutes les dates, lieux et sommes cités, pour garantir la cohérence et l'exactitude dans vos documents.",
      image: "path-to-image3.jpg",
    },
  ];

  return (
    <div className="functionalities">
      <h3 className="solution-title">Notre solution</h3>
      <h2 className="functionalities-title">
        Découvrez ce que vous pouvez faire
      </h2>
      <div className="functionalities-container">
        <div
          className="functionalitie-card large-card"
          key={functionalities[0].id}
        >
          <img
            src={functionalities[0].image}
            alt={functionalities[0].title}
            className="functionalitie-image"
          />
          <h3 className="functionalitie-title">{functionalities[0].title}</h3>
          <p className="functionalitie-description">
            {functionalities[0].description}
          </p>
          <button className="functionalitie-button">+ En savoir plus</button>
        </div>
        <div className="small-cards-container">
          {functionalities.slice(1).map((functionalitie) => (
            <div
              className="functionalitie-card small-card"
              key={functionalitie.id}
            >
              <img
                src={functionalitie.image}
                alt={functionalitie.title}
                className="functionalitie-image"
              />
              <h3 className="functionalitie-title">{functionalitie.title}</h3>
              <p className="functionalitie-description">
                {functionalitie.description}
              </p>
              <button className="functionalitie-button">
                + En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Functionalities;
