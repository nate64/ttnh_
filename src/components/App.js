import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';

import Navbar from './navbar'



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
