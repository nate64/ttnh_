import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';

import Navbar from './navbar'
import Home from './home'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>

      </div>
    );
  }
}

export default App;
