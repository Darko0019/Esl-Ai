import React from "react";
import "../Styles/TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
      <section className="testimonials-section">
        <h2>Témoignages d'Étudiants</h2>
        <p>Découvrez ce que nos étudiants pensent de notre plateforme et comment elle a transformé leur apprentissage !</p>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
            <h3>Review title</h3>
            <p>Review body</p>
            <div className="reviewer-info">
              <img className="reviewer-photo" src="profil.png" alt="Reviewer 1" />
              <div>
                <p className="reviewer">Reviewer name</p>
                <p className="date">Date</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
            <h3>Review title</h3>
            <p>Review body</p>
            <div className="reviewer-info">
              <img className="reviewer-photo" src="/images/reviewer2.png" alt="Reviewer 2" />
              <div>
                <p className="reviewer">Reviewer name</p>
                <p className="date">Date</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
            <h3>Review title</h3>
            <p>Review body</p>
            <div className="reviewer-info">
              <img className="reviewer-photo" src="/images/reviewer3.png" alt="Reviewer 3" />
              <div>
                <p className="reviewer">Reviewer name</p>
                <p className="date">Date</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  
