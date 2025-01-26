import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import ServicesSection from "./Components/ServicesSection";
import Equipes from "./Components/Equipes";
import ProjectManagement from "./Components/ProjectManagement";
import PersonalityTest from "./Components/PersonalityTest"; // Student-specific page
import Login from "./Components/Login"; // Login component
import Footer from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null); // Store logged-in user data (e.g., role and name)

  // Determine the redirection path based on the role
  const getRedirectPath = (role) => {
    switch (role) {
      case "prof":
        return "/services";
      case "student":
        return "/personality";
      default:
        return "/";
    }
  };

  // Protected Route Wrapper for role-based access
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!user) {
      return <Navigate to="/" />; // Redirect to login if not authenticated
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return <Navigate to="/" />; // Redirect to login if role is unauthorized
    }

    return children;
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar only visible for logged-in users */}
        {user && <Navbar2 />}

        <main className="content">
          <Routes>
            {/* Login Route */}
            <Route
              path="/"
              element={
                user ? <Navigate to={getRedirectPath(user.role)} /> : <Login setUser={setUser} />
              }
            />

            {/* Routes for Professors */}
            <Route
              path="/services"
              element={
                <ProtectedRoute allowedRoles={["prof"]}>
                  <ServicesSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/equipes"
              element={
                <ProtectedRoute allowedRoles={["prof"]}>
                  <Equipes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/projets"
              element={
                <ProtectedRoute allowedRoles={["prof"]}>
                  <ProjectManagement />
                </ProtectedRoute>
              }
            />

            {/* Routes for Students */}
            <Route
              path="/personality"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <PersonalityTest />
                </ProtectedRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
