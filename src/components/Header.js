import React, { Component } from 'react';
import './../App.css';
import logo from './../logo.png';

class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-warning bg-warning fixed-top">
        <img src={logo} className="logo"/>
        <a href="/" className="navbar-brand text-white mx-auto">TramBots</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </header>
    );
  }
}

export default Header;
