import React, { useState, useEffect } from "react";
import { useLocation, HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Navbar2 from "./Components/Navbar2";
import ServicesSection from "./Components/ServicesSection";
import Equipes from "./Components/Equipes";
import ProjectManagement from "./Components/ProjectManagement";
import ContactForm from "./Components/ContactForm";
import Testimonials from "./Components/Testimonials";
import PersonalityTest from "./Components/PersonalityTest";
import Section from "./Components/Section";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Guide from "./Components/Guide";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const handleLogin = (role) => {
    setRole(role);
    localStorage.setItem("role", role);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);
  };

  const location = useLocation();
  const showNavAndFooter = location.pathname !== "/login";

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

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
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Guide" element={<Guide />} />
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
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      );
    }

    return <Route path="*" element={<Navigate to="/" />} />;
  };

  return (
          <div className="app">
            { showNavAndFooter && <Navbar2 role={role} />}
            <main className="content">
              <Routes>{renderRoutesForRole()}</Routes>
            </main>
            { showNavAndFooter && <Footer /> }
          </div>
  );
}

export default App;
