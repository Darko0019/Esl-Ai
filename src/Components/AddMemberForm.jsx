import React, { useState } from 'react';
import PersonalityTest from './PersonalityTest'; // Importation du composant de test
import '../Styles/AddMemberForm.css';

const AddMemberForm = ({ onAddMember, onClose }) => {
  const [newMember, setNewMember] = useState({
    nom: '',
    prenom: '',
    personnalite: '',
  });
  const [showPersonalityTest, setShowPersonalityTest] = useState(false); // État pour afficher le composant

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nom, prenom, personnalite } = newMember;

    if (!nom.trim() || !prenom.trim() || !personnalite.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    onAddMember(newMember);
    setNewMember({ nom: '', prenom: '', personnalite: '' });
  };

  const handleShowPersonalityTest = () => {
    setShowPersonalityTest(true); // Basculer pour afficher PersonalityTest
  };

  return (
    <div>
      {showPersonalityTest ? (
        <PersonalityTest /> // Affichage du composant PersonalityTest
      ) : (
        <form className="add-member-form" onSubmit={handleSubmit}>
          <h2>Ajouter un Membre</h2>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={newMember.nom}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={newMember.prenom}
            onChange={handleInputChange}
            className="form-input"
          />
          <select
            name="personnalite"
            value={newMember.personnalite}
            onChange={handleInputChange}
            className="form-select">
            <option value="">Sélectionnez un type de personnalité</option>
            <option value="INTJ">INTJ - Architecte</option>
            <option value="INTP">INTP - Logicien</option>
            <option value="ENTJ">ENTJ - Commandant</option>
            <option value="ENTP">ENTP - Innovateur</option>
            <option value="INFJ">INFJ - Avocat</option>
            <option value="INFP">INFP - Médiateur</option>
            <option value="ENFJ">ENFJ - Protagoniste</option>
            <option value="ENFP">ENFP - Inspirateur</option>
            <option value="ISTJ">ISTJ - Logisticien</option>
            <option value="ISFJ">ISFJ - Défenseur</option>
            <option value="ESTJ">ESTJ - Directeur</option>
            <option value="ESFJ">ESFJ - Consul</option>
            <option value="ISTP">ISTP - Virtuose</option>
            <option value="ISFP">ISFP - Aventurier</option>
            <option value="ESTP">ESTP - Entrepreneur</option>
            <option value="ESFP">ESFP - Artiste</option>
          </select>
          <p className='lienTest'>Vous ne savez pas?
          <a
              className="test-button"
              onClick={handleShowPersonalityTest}
              >
              Tester la Personnalité
            </a>
            </p>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Ajouter
            </button>
            <button type="button" className="close-button" onClick={onClose}>
              Fermer
            </button>

          </div>
        </form>
      )}
    </div>
  );
};

export default AddMemberForm;