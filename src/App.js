import React from "react";
import ServicesSection from "./Components/ServicesSection";
import "./App.css";
import ContactForm from "./Components/ContactForm";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";
import Section from "./Components/Section";
import Equipes from "./Components/Equipes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";  // Use BrowserRouter here

import ProjectManagement from "./Components/ProjectManagement";
import Faq from "./Components/Faq";
import BoiteMessage from "./Components/BoiteMessage";
import Guide from "./Components/Guide";

function App() {
  const [activeComponent, setActiveComponent] = React.useState(null);

  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div className="app">
        <Navbar2 />
        <main className="content">
          <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/services" element={<ServicesSection setActiveComponent={setActiveComponent} />} />
            <Route path="/Equipes" element={<Equipes />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Projets" element={<ProjectManagement />} />
            <Route path="/FAQ" element={<Faq />} />
            <Route path="/BoiteMessage" element={<BoiteMessage />} />
            <Route path="/Guide" element={<Guide />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;