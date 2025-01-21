import React from "react";
import Logo from "../Images/Logo.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-copyright">
        <img className="logo" src={ Logo } alt="Esl ai Logo" />
        <p id="copyright">©2024 ESL Ai — Tous droits réservés</p>
      </div>
      <ul className="social-links">
        <li><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
        <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;