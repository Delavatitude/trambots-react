import React, { Component } from 'react';
import './../App.css';
import logo from './../trambot.png';

class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-warning bg-warning fixed-top">
        <img src={logo} className="logo"/>
        <a href="/" className="navbar-brand text-white pull-right">TramBots</a>
      </header>
    );
  }
}

export default Header;
