import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h5 className="footer-title">Plan du site</h5>
            <ul className="footer-list">
              <li>
                <a href="#nos-offres">Nos offres</a>
              </li>
              <li>
                <a href="#notre-communaute">Notre communauté</a>
              </li>
              <li>
                <a href="#qui-sommes-nous">Qui sommes-nous ?</a>
              </li>
              <li>
                <a href="#nous-contacter">Nous contacter</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">Légal</h5>
            <ul className="footer-list">
              <li>
                <a href="#mentions-legales">Mentions légales</a>
              </li>
              <li>
                <a href="#cgu-cgv">CGU-CGV</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
