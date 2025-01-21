import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="group">
        <h2>Restez en Contact !</h2>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Écrivez votre nom" />

            <label htmlFor="surname">Prénom</label>
            <input type="text" id="surname" placeholder="Écrivez vos prénom" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Écrivez votre email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Écrivez votre message"></textarea>

            <button className='submit' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
