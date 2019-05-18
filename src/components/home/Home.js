import React, { Component } from 'react'

import '../../styles/Home.css';
import '../../styles/landing-contact.css';

export default class Home extends Component {
  render() {
    return (
        <div className="front">
          <div className="body-text">
            <p id="header">Team SwiFT</p>
            <p id="content">Welcome to the official Team SwiFT Website. Everything you need to know about us can be found without a hassle.</p>
          </div>

          <div className="contact-container">
            <p>Send us a message!</p>
            <form className="contact-form">
              <input type="text" name="name" placeholder="Name" required/>
              <textarea name="description" placeholder="Your Message" required/>
              <input type="submit" name="submit"/>
            </form>
          </div>
        </div>
    );
  };
}