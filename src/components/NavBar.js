import React, { Component } from 'react'
import NavBarElement from './NavBarElement';

import '../styles/nav.css'

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-wrapper">
        <ul className="nav">
          <li className="left"><NavBarElement name="Home"/></li>
          <li className="left"><NavBarElement name="Recruitment"/></li>
          <li className="left"><NavBarElement name="News"/></li>
          <li className="left"><NavBarElement name="Roster"/></li>

          <li className="right"><NavBarElement name="Merchandise"/></li>
          <li className="right"><NavBarElement name="About"/></li>
          <li className="right"><NavBarElement name="Contact"/></li>
          <li className="right"><NavBarElement name="Media"/></li>
        </ul>
      </div>
    )
  }
}

// TODO: Add "SwiFT" logo between Roster and Merchandise routing link