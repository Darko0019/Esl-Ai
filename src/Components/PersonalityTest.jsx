import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Styles/PersonalityTest.css";

const PersonalityTest = () => {
  // State to manage the visibility of the spinner
  const [loading, setLoading] = useState(true);

  // Function to hide the spinner when the iframe has loaded
  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="test-cont">
      <h1>Test de Personnalité</h1>

      {/* Spinner and message */}
      {loading && (
        <div className="spinner-container">
          <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-primary" role="status">
              
            </div>
            <p className="loading-message mt-3">
              Veuillez patienter un moment, cela pourrait prendre un peu de temps...
            </p>
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src="https://esl-ai.onrender.com/proxy"
        title="Test de personnalité"
        className="test"
        onLoad={handleIframeLoad} // Trigger when iframe loads
      ></iframe>
    </div>
  );
};

export default PersonalityTest;
