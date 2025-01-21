import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Section.css";

const Section = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">

        <p id="title">
          Engagez-vous et apprenez avec notre plateforme ESL : Études de cas et projets transformés à portée de main
        </p>
        <p id="description">
          Découvrez une nouvelle façon d'apprendre et développez vos compétences grâce à nos outils en ligne innovants.
        </p>

        <Link to="/services" className="hero-button">
          Découvrez nos services
        </Link>
      </div>
    </div>
  );
};

export default Section;
