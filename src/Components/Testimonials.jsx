import React from 'react';
import '../Styles/Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Témoignages d'Étudiants</h2>
      <p className='p'>Découvrez ce que nos étudiants pensent de notre plateforme et comment elle a transformé leur apprentissage !</p>
      <div className="testimonials">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="user-info">
            <div className="avatar"></div>
            <div className="user-details">
              <p className="user-name">Alami Kamal</p>
              <p className="date">08 / 09 / 2024 - 10:23</p>
            </div>
          </div>
          <p className="testimonial-text">
            Très utile 👏👏 <br />
            Bravo
          </p>
          <div className="card-footer">
            <span className="likes">2 👍</span>
            <span className="replies">Reply</span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="user-info">
            <div className="avatar"></div>
            <div className="user-details">
              <p className="user-name">_sufyaane009</p>
              <p className="date">Il y a 2min</p>
            </div>
          </div>
          <p className="testimonial-text">
            La plateforme est une excellente expérience d'apprentissage !
          </p>
          <div className="card-footer">
            <span className="likes">1 👍</span>
            <span className="replies">Reply</span>
          </div>
        </div>

        {/* Placeholder Card */}
        <div className="testimonial-card">
          <div className="user-info">
            <div className="avatar"></div>
            <div className="user-details">
              <p className="user-name">zizooo</p>
              <p className="date">Il y a 1h</p>
            </div>
          </div>
          <p className="testimonial-text">Wow !</p>
          <div className="card-footer">
            <span className="likes">0 👍</span>
            <span className="replies">Reply</span>
          </div>
        </div>
      </div>
      <div className="consult-button">
        <button>Consulter ➔</button>
      </div>
    </div>
  );
};

export default Testimonials;
// import React from 'react';
// import './Testimonials.css';

// const Testimonials = () => {
//   return (
//     <div className="testimonials-container">
//       <div className="header">
//         <h2>Témoignages d'Étudiants</h2>
//         <button className="consult-button">Consulter ➔</button>
//       </div>
//       <p>Découvrez ce que nos étudiants pensent de notre plateforme et comment elle a transformé leur apprentissage !</p>
//       <div className="testimonials">
//         {/* Testimonial 1 */}
//         <div className="testimonial-card">
//           <div className="user-info">
//             <div className="avatar"></div>
//             <div className="user-details">
//               <p className="user-name">Alami Kamal</p>
//               <p className="date">08 / 09 / 2024 - 10:23</p>
//             </div>
//           </div>
//           <p className="testimonial-text">
//             Très utile 👏👏 <br />
//             Bravo
//           </p>
//           <div className="card-footer">
//             <span className="likes">2 👍</span>
//             <span className="replies">Reply</span>
//           </div>
//         </div>

//         {/* Testimonial 2 */}
//         <div className="testimonial-card">
//           <div className="user-info">
//             <div className="avatar"></div>
//             <div className="user-details">
//               <p className="user-name">_sufyaane009</p>
//               <p className="date">Il y a 2min</p>
//             </div>
//           </div>
//           <p className="testimonial-text">
//             La plateforme est une excellente expérience d'apprentissage !
//           </p>
//           <div className="card-footer">
//             <span className="likes">1 👍</span>
//             <span className="replies">Reply</span>
//           </div>
//         </div>

//         {/* Placeholder Card */}
//         <div className="testimonial-card">
//           <div className="user-info">
//             <div className="avatar"></div>
//             <div className="user-details">
//               <p className="user-name">Full Name</p>
//               <p className="date">Date</p>
//             </div>
//           </div>
//           <p className="testimonial-text">Lorem ipsum lorem Lorem</p>
//           <div className="card-footer">
//             <span className="likes">0 👍</span>
//             <span className="replies">Reply</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

