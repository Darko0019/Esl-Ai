import React from "react";
import "../Styles/Guide.css";
import AddMember from "../Images/Add_Member_Guide.png";
import ContactUs from "../Images/Contact_Guide.png";
import Projects from "../Images/Projects_Guide.png";
import Feedback from "../Images/Feedback_Guide.png";

const Guide = () => {
  // Données pour chaque section
  const sections = [
    {
      title: "Ajouter un Membre",
      description: "Ajoutez facilement des membres à votre équipe.",
      image: AddMember
    },
    {
      title: "Contactez-Nous",
      description: "Remplissez notre formulaire de contact pour nous joindre.",
      image: ContactUs
    },
    {
      title: "Vos Projet",
      description: "Créez et découvrez les détails de vos projets.",
      image: Projects
    },
    {
      title: "Témoignages",
      description: "Ce que nos clients disent de nous.",
      image: Feedback
    },
  ];

  return (
    <div className="guide">
      {sections.map((section, index) => (
        <div key={index} className="section">
          <img src={section.image} alt={section.title} className="section-image" />
          <div className="section-content">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Guide;