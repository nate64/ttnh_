import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/App.css';

import Navbar from './navbar'
import Home from './home'
import About from './about'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>

      </div>
    );
  }
}

export default App;
