import React from "react";
import "./Features.css";

function Features() {
  const advantages = [
    {
      id: 1,
      logo: "path-to-logo1.jpg",
      title: "Gagner du temps",
      description:
        "Notre addin automatise les tâches répétitives et chronophages.",
    },
    {
      id: 2,
      logo: "path-to-logo2.jpg",
      title: "Diminuer le risque d'erreur",
      description:
        "Ayez confiance dans l'exactitude des informations présentes dans vos documents.",
    },
    {
      id: 3,
      logo: "path-to-logo3.jpg",
      title: "Maintenez la cohérence",
      description:
        "Une présentation professionnelle et cohérente en un simple clic, c'est possible.",
    },
    {
      id: 4,
      logo: "path-to-logo4.jpg",
      title: "Simplicité d'utilisation",
      description:
        "Facile à installer et à utiliser, profitez-en dès aujourd'hui !",
    },
  ];

  return (
    <div className="features">
      <h2 className="features-title">Nos avantages</h2>
      <div className="advantages-container">
        {advantages.map((advantage) => (
          <div className="advantage-card" key={advantage.id}>
            <img
              src={advantage.logo}
              alt={advantage.title}
              className="advantage-logo"
            />
            <h3 className="advantage-title">{advantage.title}</h3>
            <p className="advantage-description">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
