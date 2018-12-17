import React, { Component, Fragment } from 'react';
import { Switch, Route, } from 'react-router-dom';

import Navbar from './navbar'
import Home from './home'
import About from './about'
import Products from './Products'
import Contact from './Contact'
import NoMatch from './nomatch'
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/products' component={Products}/>
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
