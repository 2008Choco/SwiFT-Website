import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './components/home/Home';
import Recruitment from './components/recruitment/Recruitment';
import UnknownRoute from './components/UnknownRoute';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/recruitment" component={Recruitment}/>
            <Route component={UnknownRoute}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}