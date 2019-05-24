import React from 'react'

import '../../styles/contact.css';

export default function ContactForm() {
  return (
    <div className="contact-container">
      <p>Send us a message!</p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" required/>
        <textarea name="description" placeholder="Your Message" required/>
        <input type="submit" name="submit"/>
      </form>
    </div>
  );
}
