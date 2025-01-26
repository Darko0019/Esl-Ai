import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import ProfComponent from "./Components/ProfComponent";
import EtudiantComponent from "./Components/EtudiantComponent";

function App() {
  const [role, setRole] = useState(null);

  // Vérifier si un rôle est déjà stocké (persist session)
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const handleLogin = (role) => {
    setRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <button onClick={handleLogout}>Se déconnecter</button>
      {role === "prof" && <ProfComponent />}
      {role === "etudiant" && <EtudiantComponent />}
    </div>
  );
}

export default App;
