import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProfComponent from "./Components/ProfComponent";
import EtudiantComponent from "./Components/EtudiantComponent";
import ServicesSection from "./Components/ServicesSection";
import Equipes from "./Components/Equipes";
import ProjectManagement from "./Components/ProjectManagement";
import ContactForm from "./Components/ContactForm";
import Testimonials from "./Components/Testimonials";
import PersonalityTest from "./Components/PersonalityTest";
import Section from "./Components/Section";
import Form from "./Components/form";

function App() {
  const [role, setRole] = useState("");

  // Check if a role is already stored (persist session)
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

  // Define role-based routes
  const renderRoutesForRole = () => {
    if (role === "prof") {
      return (
        <>
          <Route path="/" element={<Section />} />
          <Route path="/ServicesSection" element={<ServicesSection />} />
          <Route path="/Equipes" element={<Equipes />} />
          <Route path="/ProjectManagement" element={<ProjectManagement />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      );
    }

    if (role === "etudiant") {
      return (
        <>
          <Route path="/" element={<Section />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/PersonalityTest" element={<PersonalityTest />} />
        </>
      );
    }

    return <Route path="*" element={<Navigate to="/" />} />;
  };

  return (
    <Router>
      <div>
        <Navbar role={role} />
        <button onClick={handleLogout}>Se déconnecter</button>
        <Routes>{renderRoutesForRole()}</Routes>
      </div>
    </Router>
  );
}

export default App;
