import React, { Component } from 'react';
import './App.css';

import { Router } from 'react-router-dom';

import history from './history';
import Routes from './Routes';

class App extends Component {

  render() {

    return (

      <Router history={history}>
        <Routes />
      </Router>

    );

  }

}

export default App;
