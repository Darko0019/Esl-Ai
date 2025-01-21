import React, { useState } from "react";
import "../Styles/ServicesSection.css";
import Transformer from "./Transformer"; // Composant Transformer
import Generer from "./Generer"; // Composant Générer

const ServicesSection = ({ setActiveComponent }) => {
  const [activeComponentState, setActiveComponentState] = useState(null); // Gestion de l'état actif

  return (
    <div id="parent">
      {activeComponentState === null && (
        <>
          <h2 className="services-title">Nos Services</h2>
          <section className="services-section">
            <div className="service-card">
              <div className="service-icon">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" id="icon1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-.352,.072-.686,.184-1H21.816c.112,.314,.184,.648,.184,1v14ZM4,8c0-.552,.447-1,1-1h3c.553,0,1,.448,1,1s-.447,1-1,1h-3c-.553,0-1-.448-1-1Zm10,5c0,.553-.447,1-1,1H7c-.553,0-1-.447-1-1s.447-1,1-1h6c.553,0,1,.448,1,1Zm0,5c0,.553-.447,1-1,1H5c-.553,0-1-.447-1-1s.447-1,1-1H13c.553,0,1,.447,1,1Zm6,0c0,1.105-.895,2-2,2s-2-.895-2-2c0-.738,.405-1.376,1-1.723v-6.277c0-.551-.448-1-1-1h-1.277c-.346,.595-.984,1-1.723,1-1.105,0-2-.895-2-2s.895-2,2-2c.738,0,1.376,.405,1.723,1h1.277c1.654,0,3,1.346,3,3v6.277c.595,.346,1,.984,1,1.723Z"/>
              </svg>
              </div>
              <h3>Transformation des PFA en projets ESL</h3>
              <p>Utilisez l'IA pour adapter vos projets actuels à l'approche ESL.</p>
              <button onClick={() => setActiveComponentState("Transformer")}>
                Transformer un PFA
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" id="icon2" height="512" viewBox="0 0 24 24" width="512" data-name="Layer 1">
                  <path d="m12.883 15.216-7.935 7.935a2.9 2.9 0 1 1 -4.1-4.1l7.935-7.935zm4.217-8.316a2.967 2.967 0 0 0 -4.1 0l-2.8 2.8 4.1 4.1 2.8-2.8a2.9 2.9 0 0 0 0-4.1zm-12.237-1.755 1.55.442.442 1.55a1.191 1.191 0 0 0 2.29 0l.442-1.55 1.55-.442a1.191 1.191 0 0 0 0-2.29l-1.55-.442-.442-1.55a1.191 1.191 0 0 0 -2.29 0l-.442 1.55-1.55.442a1.191 1.191 0 0 0 0 2.29zm12 12 1.55.442.442 1.55a1.191 1.191 0 0 0 2.29 0l.442-1.55 1.55-.442a1.191 1.191 0 0 0 0-2.29l-1.55-.442-.442-1.55a1.191 1.191 0 0 0 -2.29 0l-.442 1.55-1.55.442a1.191 1.191 0 0 0 0 2.29zm.893-12.645 1.355.387.389 1.357a1.042 1.042 0 0 0 2 0l.387-1.355 1.357-.389a1.042 1.042 0 0 0 0-2l-1.355-.387-.389-1.357a1.042 1.042 0 0 0 -2 0l-.387 1.355-1.357.389a1.042 1.042 0 0 0 0 2z"/>
                </svg>
              </div>
              <h3>Générer des études de cas ESL personnalisées</h3>
              <p>Créez de nouveaux projets adaptés à vos besoins pédagogiques.</p>
              <button onClick={() => setActiveComponentState("Generer")}>
                Générer un cas ESL
              </button>
            </div>
          </section>
        </>
      )}

      {/* Affichage conditionnel des composants */}
      {activeComponentState === "Transformer" && (
        <Transformer onBack={() => setActiveComponentState(null)} />
      )}
      {activeComponentState === "Generer" && (
        <Generer onBack={() => setActiveComponentState(null)} />
      )}
    </div>
  );
};

export default ServicesSection;
