import React, { Component } from 'react'
import NavBarElementList from './NavBarElementList';

import '../styles/nav-footer.css'

const logo = require("../assets/swift-logo.png");

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <NavBarElementList side="left" elements={['Home', 'Recruitment', 'News', 'Roster']}/>
        <img id="swift-logo" src={logo} alt="SwiFT Logo"/>
        <NavBarElementList side="right" elements={['Merchandise', 'About', 'Contact', 'Media']}/>
      </div>
    )
  }
}