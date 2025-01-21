import React, { useState } from 'react';
import TeamDetails from './TeamDetails'; // Component to display team details
import '../Styles/Equipes.css';

const Equipes = () => {
  const [teams, setTeams] = useState([
    {
      name: 'Equipe 1',
      members: [
        { nom: 'Alami', prenom: 'Kamal', personnalite: 'Leader' },
        { nom: 'Rami', prenom: 'Zaid', personnalite: 'Creative' },
        { nom: 'Jamal', prenom: 'Marwan', personnalite: 'Analytical' },
      ],
    },
    {
      name: 'Equipe 2',
      members: [
        { nom: 'Moutawakil', prenom: 'Abdelatif', personnalite: 'Innovative' },
        { nom: 'Lamin', prenom: 'Mostafa', personnalite: 'Organized' },
        { nom: 'Farah', prenom: 'Amina', personnalite: 'Dynamic' },
      ],
    },
    {
      name: 'Equipe 3',
      members: [
        { nom: 'Farouk', prenom: 'Faisal', personnalite: 'Visionary' },
        { nom: 'Rachid', prenom: 'Hasan', personnalite: 'Empathetic' },
        { nom: 'Ali', prenom: 'Mona', personnalite: 'Pragmatic' },
      ],
    },
  ]);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="equipes-container">
      {!selectedTeam ? (
        <div className="team-list">
          <div className="equipes-header">
            <h2>Mes Equipes</h2>
            <button className="add-equipe-button">
              <span>+</span>
            </button>
          </div>
          {teams.map((team, index) => (
            <div
              key={index}
              className="team-item"
              onClick={() => handleTeamClick(team)}
            >
              {team.name}
            </div>
          ))}
        </div>
      ) : (
        <TeamDetails
          team={selectedTeam}
          onBack={() => setSelectedTeam(null)} // Go back to team list
        />
      )}
    </div>
  );
};

export default Equipes;