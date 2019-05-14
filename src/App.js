import React, { Component } from 'react'
import './App.css';

import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
      </React.Fragment>
    );
  };
}