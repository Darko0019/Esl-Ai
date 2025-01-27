import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Detaillesprojet.css";
import BoiteMessage from './BoiteMessage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Detaillesprojet() {
  const navigate = useNavigate();

  const handleTeamClick = (teamId) => {
    navigate(`/team/${teamId}`); // Navigate to the TeamDetails page with the team ID
  };

  const onBack = () => {
    navigate('/Projets');
  };

  return (
    <div className="project-container">
      
        {/* Bouton Retour avec icône */}
        <button className="back-btn" onClick={onBack}>
          <i className="fa-solid fa-arrow-left"></i> 
        </button>
      <div className="project-details">
        <h1>Projet 2</h1>
        <div className="tags">
          <span className="badge bg-primary team-badge" onClick={() => handleTeamClick(1)}>Equipe 1</span>
          <span className="badge bg-primary team-badge" onClick={() => handleTeamClick(2)}>Equipe 2</span>
        </div>
      </div>
      <div className='boite'>
        <BoiteMessage/>
      </div>
      
    </div>
  );
}

export default Detaillesprojet;