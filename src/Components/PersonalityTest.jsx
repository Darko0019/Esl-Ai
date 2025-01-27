import React from "react";
import '../Styles/PersonalityTest.css';
// import Requestly1Img from '../Images/Requestly1.jpg';
// import Requestly2Img from '../Images/Requestly2.jpg';
// import Requestly3Img from '../Images/Requestly3.jpg';
// import Requestly4Img from '../Images/Requestly4.jpg';

const PersonalityTest = () => {
  return (
    <div className="test-cont">
      <h1>Test de Personnalité</h1>
      <iframe
        src="https://esl-ai.onrender.com/proxy"
        title="Test de personnalité"
        className="test"
      ></iframe>

      {/* <div className="requestly-cont">
        <h1>Si la page de test ne fonctionne pas, suivez ces étapes :</h1>
        <div className="requestly-guide">
          <img className="guide-images" src={ Requestly1Img } alt="Requestly1" />
          <p className="guide-text">Ouvrez le Chrome Web Store et recherchez l'extension Requestly.</p>
        </div>
        <div className="requestly-guide">
          <img className="guide-images" src={ Requestly2Img } alt="Requestly2" />
          <p className="guide-text">Ignorez la connexion et choisissez 'Modifier les en-têtes HTTP'.</p>
        </div>
        <div className="requestly-guide">
          <img className="guide-images" src={ Requestly3Img } alt="Requestly3" />
          <p className="guide-text">Dans la section 'En-têtes de réponse', sélectionnez 'Remplacer l'en-tête de réponse', puis remplissez les champs comme suit ( En-tête de réponse : x-frame-options, Valeur : Allow ).</p>
        </div>
        <div className="requestly-guide">
          <img className="guide-images" src={ Requestly4Img } alt="Requestly4" />
          <p className="guide-text">Appuyez sur Ctrl + S pour enregistrer et copiez-collez ce lien : "https://www.16personalities.com/fr/test-de-personnalite" dans le champ Test, puis cliquez sur Tester la règle.</p>
        </div>
      </div> */}
    </div>
  );
};

export default PersonalityTest;