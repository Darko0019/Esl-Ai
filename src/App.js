import React from "react";
import ServicesSection from "./ESL/Components/ServicesSection";
import "./App.css";
import ContactForm from "./ESL/Components/ContactForm";
import Testimonials from "./ESL/Components/Testimonials";
import Footer from "./ESL/Components/Footer";
import Navbar2 from "./ESL/Components/Navbar2";
import Section from "./ESL/Components/Section";
import Equipes from "./ESL/Components/Equipes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";  // Use BrowserRouter here

import ProjectManagement from "./ESL/Components/ProjectManagement";
import Faq from "./ESL/Components/Faq";
import BoiteMessage from "./ESL/Components/BoiteMessage";
import Guide from "./ESL/Components/Guide";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;