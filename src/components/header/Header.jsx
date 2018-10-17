import React from 'react';
import logo from '../../assets/images/titulo.jpg';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <div className="nav">
      <Link to='/'>Home</Link> | <Link to='/projeto'>Projeto</Link> | 
      <Link to='/etapas'> Etapas</Link> | <Link to='/componentes'>Componentes</Link> | 
      <Link to='/robocup'> RoboCup</Link> | <Link to='/fotos'>Fotos</Link> | 
      <Link to='/game'> Jogue</Link>
    </div>

  </header>
);

export default Header;
