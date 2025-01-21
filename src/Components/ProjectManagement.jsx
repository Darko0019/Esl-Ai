
import React, { useState } from 'react';
import Detaillesprojet from './Detaillesprojet'; // Importer le composant de détails du projet
import '../Styles/ProjectManagement.css';

const ProjectManagement = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Gérer le projet sélectionné

  // Fonction déclenchée lorsqu'on clique sur un projet
  const handleProjectClick = (project) => {
    setSelectedProject(project); // Met à jour l'état avec le projet sélectionné
  };

  // Rendu conditionnel pour chaque projet
  const renderProject = () => {
    switch (selectedProject) {
      case 'Projet 1':
        return (
          <Detaillesprojet projectName="Projet 1" />
        );
      case 'Projet 2':
        return (
          <Detaillesprojet projectName="Projet 2" />
        );
      case 'Projet 3':
        return (
          <Detaillesprojet projectName="Projet 3" />
        );
      case 'Projet 4':
        return (
          <Detaillesprojet projectName="Projet 4" />
        );
      default:
        return null; // Aucun projet sélectionné
    }
  };

  // Affiche la vue du projet sélectionné
  if (selectedProject) {
    return renderProject();
  }

  // Interface principale (liste des projets)
  return (
    <div id="project-management">
      <main>
        <section className="projects-section">
          {/* Historique */}
          <aside className="history">
            <h3>Historique</h3>
            <div className="history-group">
              <h4>Aujourd'hui</h4>
              <ul>
                <li>Projet 3</li>
                <li>Projet 1</li>
                <li>Projet 4</li>
              </ul>
            </div>
            <div className="history-group">
              <h4>Semaine dernière</h4>
              <ul>
                <li>Projet 2</li>
              </ul>
            </div>
          </aside>

          {/* Liste des projets */}
          <div className="projects">
            <div className="projects-header">
              <h2>Mes Projets</h2>
              <button className="add-project-button">
                <span>+</span>
              </button>
            </div>
            <div className="project-list">
              <div
                className="project-card"
                onClick={() => handleProjectClick('Projet 1')}
              >
                <span>Projet 1</span>
              </div>
              <div
                className="project-card"
                onClick={() => handleProjectClick('Projet 2')}
              >
                <span>Projet 2</span>
              </div>
              <div
                className="project-card"
                onClick={() => handleProjectClick('Projet 3')}
              >
                <span>Projet 3</span>
              </div>
              <div
                className="project-card"
                onClick={() => handleProjectClick('Projet 4')}
              >
                <span>Projet 4</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectManagement;
