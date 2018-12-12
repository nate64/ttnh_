import React, { Component, Fragment } from 'react';
import { Switch, Route, } from 'react-router-dom';

import Navbar from './navbar'
import Home from './home'
import About from './about'
import NoMatch from './nomatch'
import Footer from './footer';
import Phantom from './phantom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route component={NoMatch} />
        </Switch>
        <Phantom />
        <Footer />
      </div>
    );
  }
}

export default App;
