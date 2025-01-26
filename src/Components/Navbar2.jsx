// import { React, useState, useEffect } from 'react';
// import { NavLink } from "react-router-dom";
// import Logo from "../Images/Logo.png";
// import Profile from "../Images/Profile.png";
// import Menu from './Menu';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [role, setRole] = useState(null);

//   // Retrieve the role from localStorage
//   useEffect(() => {
//     const savedRole = localStorage.getItem("role");
//     if (savedRole) {
//       setRole(savedRole);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg">
//         <img className="navbar-brand logo" src={Logo} alt="Esl ai Logo" />
//         <ul className="navbar-nav mx-auto">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/">Accueil</NavLink>
//           </li>
//           {role === "prof" && (
//             <>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/services">Services</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/Equipes">Equipes</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/Projets">Projets</NavLink>
//               </li>
//             </>
//           )}
//           {/* {role === "etudiant" && (
//             <>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/test-personnality">Test Personnality</NavLink>
//               </li>
//             </>
//           )} */}
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/Testimonials">Testimonials</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//           </li>
//         </ul>
//         <div className="profileCont" onClick={toggleMenu}>
//           <img src={Profile} alt="Profile" className='profile' />
//         </div>
//       </nav>
//       <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
//     </>
//   );
// };

// export default Navbar;
import { React, useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import Profile from "../Images/Profile.png";
import Menu from './Menu';


const NAV_ITEMS = {
  prof: [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Equipes", path: "/Equipes" },
    { name: "Projets", path: "/Projets" },
    { name: "Testimonials", path: "/Testimonials" },
    { name: "Contact", path: "/contact" },
  ],
  etudiant: [
    { name: "Accueil", path: "/" },
    { name: "Test Personnality", path: "/test-personnality" },
    { name: "Testimonials", path: "/Testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/Testimonials" },
    { name: "Contact", path: "/contact" },
  ],
};


import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ role }) => {
  const navItems = NAV_ITEMS[role] || [];

  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav mx-auto">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink className="nav-link" to={item.path}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

