import React, { useState } from "react";
import "../Styles/Navbar2.css";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Profile from "../Images/Profile.png";
import Menu from "./Menu";

const Navbar2 = ({ role }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <img className="navbar-brand logo" src={Logo} alt="Esl ai Logo" />
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Accueil</NavLink>
          </li>
          {role === "prof" && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ServicesSection">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Equipes">Equipes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ProjectManagement">Projets</NavLink>
              </li>
            </>
          )}
          {role === "etudiant" && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/PersonalityTest">Test Personality</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Form">Envoi du Test</NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to="/Testimonials">Testimonials</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ContactForm">Contact</NavLink>
          </li>
        </ul>
        <div className="profileCont" onClick={toggleMenu}>
          <img src={Profile} alt="Profile" className="profile" />
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar2;
