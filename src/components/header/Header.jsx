import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <div className="nav">
      <Link to='/'>Home</Link> | <Link to='/fotos'>Fotos</Link>
    </div>

  </header>
);

export default Header;
