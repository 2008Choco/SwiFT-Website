import React, { Component } from 'react'
import NavBarElementList from './NavBarElementList';

import '../styles/nav.css'
import '../styles/flipper.css';

const logo = require("../assets/swift-logo.png");

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <NavBarElementList side="left" elements={['Home', 'Recruitment', 'News', 'Roster']}/>

        <div className="flip-container">
          <div className="flipper">
            <img className="swift-logo" id="front" src={logo} alt="SwiFT Logo"/>
            <img className="swift-logo" id="back" src={logo} alt="SwiFT Logo"/>
          </div>
        </div>
        
        <NavBarElementList side="right" elements={['Merchandise', 'About', 'Contact', 'Media']}/>
      </div>
    )
  }
}