import React from "react";
import '../Styles/PersonalityTest.css';

const PersonalityTest = () => {
  return (
    <div className="test-cont">
      <h1>Test de Personnalité</h1>
      <iframe
        src="https://esl-ai.onrender.com/proxy"
        title="Test de personnalité"
        className="test"
      ></iframe>
    </div>
  );
};

export default PersonalityTest;