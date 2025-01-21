import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../Styles/Faq.css';

const faqData = [
    {
      question: "Qu'est-ce que la plateforme ESL ?",
      answer:
        "La plateforme ESL est un outil en ligne qui permet de créer, gérer et transformer des projets académiques en projets à impact social en suivant la méthodologie d'apprentissage par service (ESL).",
    },
    {
      question: "Qui peut utiliser cette plateforme ?",
      answer:
        "Les enseignants et les étudiants peuvent utiliser la plateforme pour générer des études de cas, explorer des projets existants ou transformer des projets PFA en projets ESL.",
    },
    {
      question: "Quels sont les principaux avantages de la plateforme ?",
      answer: (
        <ul>
          <li>Simplifie la création de projets personnalisés.</li>
          <li>Favorise l'engagement social et l'acquisition de compétences pratiques.</li>
          <li>Offre des outils comme le test de personnalité pour attribuer des rôles adaptés.</li>
        </ul>
      ),
    },
    {
      question: "Quels types de projets puis-je créer ?",
      answer:
        "Vous pouvez créer des études de cas ESL personnalisées ou transformer des projets académiques standards (PFA) en projets à impact social.",
    },
    {
      question: "Est-ce que la plateforme est accessible sur mobile ?",
      answer:
        "Oui, la plateforme est conçue pour être compatible avec différents appareils, y compris les ordinateurs et les mobiles.",
    },
    {
      question: "Comment puis-je obtenir de l’aide si j’ai des questions ?",
      answer:
        "Une page “Contact” est disponible pour communiquer directement avec le support technique ou proposer des suggestions.",
    },
  ];
const Faq = () => {
    return (
      <div className="faq-container">
        <h1 className="faq-title">Foire Aux Questions</h1>
        <Accordion flush>
          {faqData.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    );
  };

export default Faq;
