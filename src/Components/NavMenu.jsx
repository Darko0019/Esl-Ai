import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ResponsiveMenu.css";

const NavMenu = ({ isOpen, closeMenu }) => {
  const handleOverlayClick = (e) => {
    if (e.target.className === "menu-backdrop") {
      closeMenu();
    }
  };

  return (
    <>
      {isOpen && <div className="menu-backdrop" onClick={handleOverlayClick}></div>}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          <i className="fi fi-rr-cross-small"></i>
        </button>
        <ul className="menu-list">
          <li>
            <Link to="/Projets">Projets</Link>
          </li>
          <li>
            <Link to="/Guide">Guide</Link>
          </li>
          <li>
            <Link to="/Faq">FAQ</Link>
          </li>
          <li>
            <Link to="/profile">Paramètres</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMenu;