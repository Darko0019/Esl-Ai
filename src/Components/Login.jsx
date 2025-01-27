import React, { useState } from "react";
import '../Styles/Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuler une base de données locale
    const users = [
      { username: "prof1", password: "pass123", role: "prof" },
      { username: "etu1", password: "test456", role: "etudiant" },
    ];

    // Vérifier les informations de connexion
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Stocker le rôle dans localStorage
      localStorage.setItem("role", user.role);
      onLogin(user.role);
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  };
  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      <a href="#">Mot de passe oublié ?</a>
    </div>
  );
  
}

export default Login;
