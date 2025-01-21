import React from "react";
import "../Styles/Transformer.css";
import { Link } from "react-router-dom";

const Transformer = ({ onBack }) => {
  return (
    <div className="container">
      {/* Titre principal */}
      <h2 className="title">Transformation des PFA en projets ESL</h2>
      <button className="back-btn" onClick={onBack}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Section formulaire */}
      <div className="form-section">
        <form>
          <label className="labelT" htmlFor="titre">1. Titre de votre PFA</label>
          <input
            type="text"
            id="titre"
            placeholder="Écrivez le titre de votre PFA"
          />

          <label className="labelT" htmlFor="description">2. Description</label>
          <textarea
            id="description"
            placeholder="Décrivez votre PFA"
            rows="4"
          ></textarea>

          <div className="buttons">
            <button type="reset" className="reset-btn">
              Réinitialiser
            </button>
            <Link className="submit-btn-cont" to="/BoiteMessage">
              <button type="submit" className="submit-btn">
                Transformer
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transformer;
