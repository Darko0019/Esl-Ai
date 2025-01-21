import React, { useState } from 'react';
import '../Styles/TeamDetails.css';
import AddMemberForm from './AddMemberForm';

const TeamDetails = ({ team, onBack }) => {
  const [members, setMembers] = useState(team.members); // Existing members
  const [showForm, setShowForm] = useState(false); // Toggle for form visibility

  const handleAddMember = (newMember) => {
    setMembers([...members, newMember]); // Add the new member to the list
    setShowForm(false); // Return to the members list after adding
  };

  return (
    <div className="team-details">
      <div className="back">
      <button className="back-button" onClick={onBack}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h2>{team.name}</h2>
      </div>
      {!showForm ? (
        <div>
          <ul className="member-list">
            {members.map((member, index) => (
              <li key={index} className="member-item">
                {member.nom} {member.prenom} - {member.personnalite}
              </li>
            ))}
          </ul>
          <button
            className="add-member-button"
            onClick={() => setShowForm(true)} // Show the form
          >
            Ajouter Membre
          </button>
        </div>
      ) : (
        <AddMemberForm
          onAddMember={handleAddMember}
          onClose={() => setShowForm(false)} // Close the form and return to the members list
        />
      )}
    </div>
  );
};

export default TeamDetails;