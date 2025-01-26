// import React from 'react';
// import '../Styles/Navbar2.css';
// import { Link } from "react-router-dom";
// import Logo from "../Images/Logo.png";

// const Navbar = () => {
//   return (
//   <nav className="navbar navbar-expand-lg navbar-transparent">
//     <div className="container-fluid">
//         <img className="navbar-brand logo" src={ Logo } alt="Esl ai Logo" />
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav mx-auto">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Accueil</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/services">Services</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/Equipes">Equipes</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/Testimonials">Testimonials</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contact">Contact</Link>
//           </li>
//         </ul>

//       </div>
//     </div>
//   </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

const Navbar = () => {
  // Récupérer le rôle de l'utilisateur depuis localStorage
  const role = localStorage.getItem('role');

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
      <div className="container-fluid">
        <img className="navbar-brand logo" src={Logo} alt="Esl ai Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            {role === 'prof' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/equipes">Equipes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/project">Project</Link>
                </li>
              </>
            )}
            {role === 'etudiant' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/PersonalityTest">Test Personality</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
