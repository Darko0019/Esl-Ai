import React from "react";
import { Accordion } from "react-bootstrap";
import "../Styles/ESLServices.css";

const ESLServices = () => {
  return (
    <div className="esl-container">
    {/* //   <header className="esl-header">
    //     <div className="logo">ESL <span>Ai</span></div>
    //     <nav className="esl-nav">
    //       <ul>
    //         <li><a href="#home">Accueil</a></li>
    //         <li><a href="#services" className="active">Services</a></li>
    //         <li><a href="#test">Test de personnalité</a></li>
    //         <li><a href="#contact">Contact</a></li>
    //       </ul>
    //     </nav>
    //     <div className="esl-profile">
    //       <i className="profile-icon"></i>
    //     </div>
    //   </header> */}
      
      <div className="esl-services">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Transformation des PFA en projets ESL
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Cette option vous permet de convertir vos Projets de Fin d'Année (PFA) traditionnels
                en projets optimisés selon la méthodologie ESL. En utilisant les outils basés sur
                l'intelligence artificielle, vous pouvez adapter vos projets existants aux nouvelles
                approches pédagogiques tout en favorisant un apprentissage pratique et interactif.
              </p>
              <button className="transform-btn">Transformer un PFA</button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Transformation des PFA en projets ESL
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Cette option vous permet de convertir vos Projets de Fin d'Année (PFA) traditionnels
                en projets optimisés selon la méthodologie ESL. En utilisant les outils basés sur
                l'intelligence artificielle, vous pouvez adapter vos projets existants aux nouvelles
                approches pédagogiques tout en favorisant un apprentissage pratique et interactif.
              </p>
              <button className="transform-btn">Transformer un PFA</button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      
      {/* <footer className="esl-footer">
        <div className="logo">ESL <span>Ai</span></div>
        <div className="social-icons">
          <i className="icon-twitter"></i>
          <i className="icon-instagram"></i>
          <i className="icon-youtube"></i>
          <i className="icon-linkedin"></i>
        </div>
      </footer> */}
    </div>
  );
};

export default ESLServices;
