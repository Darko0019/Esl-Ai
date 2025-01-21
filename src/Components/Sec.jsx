import React from 'react';
import '../Styles/Sec.css';
// import illustration from '../Images 2/illustration.png';
const Sec = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>
          Engagez-vous et apprenez avec notre plateforme ESL : 
          <br /> études de cas et projets transformés à portée de main
        </h1>
        <p>
          Découvrez une nouvelle façon d’apprendre et développez vos compétences grâce 
          à nos outils en ligne innovants.
        </p>
        <button className="cta-button">Commencer</button>
      </div>
      <div className="image-container">
        <img
          src="/images/illustration.png"
          alt="Collaboration "
          className="illustration"
        />
      </div>
    </div>
  );
};

export default Sec;
