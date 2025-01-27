import React, { useEffect, useState } from 'react';
import Navbar2 from './Navbar'; // Assurez-vous que le chemin est correct
import "../Styles/Navbar2.css"


function ProfComponent() {
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
      <Navbar2 />
      <h1>Bienvenue, Professeur !</h1>
      {/* Ajoutez ici le contenu spécifique pour le professeur */}
    </div>
  );
}

export default ProfComponent;
