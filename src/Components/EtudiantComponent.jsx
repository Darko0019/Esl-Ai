import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Assurez-vous que le chemin est correct

function EtudiantComponent() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Récupérer le rôle depuis localStorage
    const userRole = localStorage.getItem('role');
    setRole(userRole);
  }, []);

  if (!role) {
    return <div>Loading...</div>; // Ou rediriger l'utilisateur vers la page de login
  }

  return (
    <div>
      <Navbar />
      <h1>Bienvenue, Étudiant !</h1>
      {/* Ajoutez ici le contenu spécifique pour l'étudiant */}
    </div>
  );
}

export default EtudiantComponent;
