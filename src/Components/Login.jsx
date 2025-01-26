import React, { useState } from 'react';
import Logo from "../Images/Logo.png";
import '../Styles/Login.css';
import { addUser, getUsers } from '../backend/users';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('student');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password || !firstName || !lastName) {
      setError('Tous les champs sont requis pour l’inscription.');
      return;
    }

    // Add new user to the "database"
    addUser({ username, password, firstName, lastName, role });
    setError('');
    setIsSignup(false); // Redirect to login after signup
    alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = getUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setError('');
      setUser(user);
      alert(`Bienvenue, ${user.firstName} !`);
      // Redirect based on the role
      if (user.role === 'prof') {
        // Redirect to professor platform
        console.log('Redirecting to professor platform...');
      } else {
        // Redirect to student platform
        console.log('Redirecting to student platform...');
      }
    } else {
      setError('Nom d’utilisateur ou mot de passe invalide.');
    }
  };

  return (
    <div className="login-container">
      <img className="logo" src={Logo} alt="Esl ai Logo" />
      <div className={`form-container ${isSignup ? 'signup-form' : 'login-form'}`}>
        {isSignup ? (
          <>
            <h2 className="form-title">Inscription</h2>
            <form onSubmit={handleSignup}>
              <label htmlFor="first-name">Nom</label>
              <input
                type="text"
                id="first-name"
                placeholder="Écrivez votre nom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="last-name">Prénom</label>
              <input
                type="text"
                id="last-name"
                placeholder="Écrivez votre prénom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="username">Nom d’utilisateur</label>
              <input
                type="text"
                id="username"
                placeholder="Écrivez votre nom d’utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                placeholder="Écrivez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="student"
                    checked={role === 'student'}
                    onChange={() => setRole('student')}
                  />
                  Étudiant
                </label>
                <label>
                  <input
                    type="radio"
                    value="prof"
                    checked={role === 'prof'}
                    onChange={() => setRole('prof')}
                  />
                  Professeur
                </label>
              </div>
              <button type="submit" className="submit">S'inscrire</button>
            </form>
          </>
        ) : (
          <>
            <h2 className="form-title">Connexion</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Nom d’utilisateur</label>
              <input
                type="text"
                id="username"
                placeholder="Écrivez votre nom d’utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                placeholder="Écrivez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="submit">Se connecter</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </>
        )}

        <div className="toggle">
          {isSignup ? (
            <p>
              Vous avez déjà un compte ? <span onClick={() => setIsSignup(false)}>Se connecter</span>
            </p>
          ) : (
            <p>
              Vous n'avez pas un compte ? <span onClick={() => setIsSignup(true)}>Créer un compte</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
