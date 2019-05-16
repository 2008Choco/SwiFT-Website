import React, { Component } from 'react'
import NavBarElementList from './NavBarElementList';

import '../styles/nav.css'

const logo = require("../assets/swift-logo.png");

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <NavBarElementList side="left" elements={['Home', 'Recruitment', 'News', 'Roster']}/>
        <img className="swift-logo" id="front" src={logo} alt="SwiFT Logo"/>
        <NavBarElementList side="right" elements={['Merchandise', 'About', 'Contact', 'Media']}/>
      </div>
    )
  }
}