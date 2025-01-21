import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Generer.css";

function ESLGenerate({ onBack }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const questions = [
    "Titre de votre PFA",
    "Description",
    "Objectifs",
    "Public cible",
    "Technologies utilisées",
    "Contraintes",
    "Résultats attendus",
    "Conclusion",
  ];

  const handleInputChange = (e, index) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[questions[index]] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (step < questions.length / 2) {
      setStep(step + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenerate = () => {
    console.log("Generated answers:", answers);
  };

  // Calculate the progress as a percentage
  const progress = (step - 1) * 25;

  return (
    <div>
      <main className="main">
        <h2>Transformation des PFA en projets ESL</h2>
        <p className="p1">Répond aux questions suivantes pour générer des études de cas convenables.</p>

        <button className="back-btn" onClick={onBack}><i className="fa-solid fa-arrow-left"></i></button>

        <div className="form-container">
          {!showSummary ? (
            <div>
              {[0, 1].map((offset) => {
                const index = (step - 1) * 2 + offset;
                return (
                  index < questions.length && (
                    <div className="form-group" key={index}>
                      <label className="labelG">{questions[index]}</label>
                      <input
                        type="text"
                        placeholder={questions[index]}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </div>
                  )
                );
              })}

              {/* Progress bar */}
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Buttons */}
              <div className="button-group">
                <button
                  className="previous-button"
                  onClick={handlePrevious}
                  disabled={step === 1}
                >
                  Précédent
                </button>
                <button className="next-button" onClick={handleNext}>
                  {step < questions.length / 2 ? "Suivant" : "Suivant"}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Résumé des réponses</h2>
              <ul>
                {questions.map((q, index) => (
                  <li key={index}>
                    <strong>{q}: </strong> {answers[q] || "Non répondu"}
                  </li>
                ))}
              </ul>
              <Link to="/BoiteMessage">
                <button className="generate-button" onClick={handleGenerate}>
                  Générer
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ESLGenerate;