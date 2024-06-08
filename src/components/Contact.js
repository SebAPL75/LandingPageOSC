import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Vous souhaitez nous contacter ?</h2>
          <p className="contact-description">
            Nous sommes à votre écoute ! Si vous avez une question ou une
            suggestion concernant notre addin, n'hésitez pas à nous contacter.
            Notre équipe se fera un plaisir de vous répondre et de vous
            assister.
          </p>
          <div className="contact-buttons">
            <button className="contact-button primary">Contactez nous</button>
            <button className="contact-button secondary">
              Demander une démo
            </button>
          </div>
        </div>
        <div className="contact-image">
          <img src="path-to-image.jpg" alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
