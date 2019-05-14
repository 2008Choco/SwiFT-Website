import React, { Component } from 'react'
import NavBarElement from './NavBarElement';

import '../styles/nav.css'

const logo = require("../assets/swift-logo.png");

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <div className="nav" id="left">
          <ul>
            <li><NavBarElement name="Home"/></li>
            <li><NavBarElement name="Recruitment"/></li>
            <li><NavBarElement name="News"/></li>
            <li><NavBarElement name="Roster"/></li>
          </ul>
        </div>

        <img src={logo} alt="SwiFT Logo" id="swift-logo"/>
        
        <div className="nav" id="right">
          <ul>
            <li><NavBarElement name="Merchandise"/></li>
            <li><NavBarElement name="About"/></li>
            <li><NavBarElement name="Contact"/></li>
            <li><NavBarElement name="Media"/></li>
          </ul>
        </div>
      </div>
    )
  }
}