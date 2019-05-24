import React from 'react'
import ContactForm from './ContactForm';

import '../../styles/home.css';

export default function Home() {
  return (
    <div className="front">
      <div className="body-text">
        <p id="header">Team SwiFT</p>
        <p id="content">Welcome to the official Team SwiFT Website. Everything you need to know about us can be found without a hassle.</p>
      </div>

      <ContactForm/>
    </div>
  );
}
