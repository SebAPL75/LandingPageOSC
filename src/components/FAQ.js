import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment cet addin peut-il m'aider à gagner du temps ?",
      answer:
        "Notre addin automatise les tâches répétitives telles que la mise en forme, la mise en page, et l'identification des références juridiques. Vous pourrez ainsi vous concentrer sur l'analyse et la rédaction, plutôt que sur des tâches administratives, ce qui vous permettra de gagner un temps précieux au quotidien.",
    },
    {
      question:
        "L'addin est-il compatible avec toutes les versions de Microsoft Word ?",
      answer:
        "Oui, notre addin est compatible avec les versions récentes de Microsoft Word, y compris Office 365. Nous recommandons de toujours utiliser la dernière version de Word pour bénéficier de toutes les fonctionnalités et des mises à jour de sécurité.",
    },
    {
      question: "Mes données sont-elles en sécurité avec cet addin ?",
      answer:
        "Absolument. Nous prenons la sécurité des données très au sérieux. Toutes les informations traitées par l'addin sont stockées localement sur votre ordinateur. De plus, nous utilisons des protocoles de sécurité avancés pour protéger vos données sensibles contre tout accès non autorisé.",
    },
    {
      question:
        "Comment obtenir de l'aide si je rencontre un problème avec l'addin ?",
      answer:
        "Nous offrons un support technique dédié pour nos utilisateurs. Vous pouvez nous contacter via notre site web ou par e-mail. De plus, notre centre d'aide en ligne contient une base de connaissances complète et des tutoriels pour vous aider à résoudre les problèmes courants rapidement.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Foire aux questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span>{openQuestion === index ? "-" : "+"}</span>
            </div>
            {openQuestion === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <Link to="/faq">
        <button className="faq-button">Voir toutes les questions</button>
      </Link>
    </div>
  );
}

export default FAQ;
