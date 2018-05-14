import React, { Component } from 'react';
import './../App.css';
import logo from './../img/trambot.png';
import {
  SearchBox
} from 'react-instantsearch/dom';

class Header extends Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark sticky-top flex-md-nowrap p-0">
          <a className="navbar-brand">
            <img src={logo} width="50" height="50" className="d-inline-block align-top ml-md-2 ml-2" alt="" />
          </a>
          <div className="text-center">
            <SearchBox
              translations={{placeholder: 'Rechercher un arrêt !'}}
            />
          </div>
          <a href="/" className="navbar-brand orange ml-md-3 display">TramBots</a>
        </nav>
      </header>
    );
  }
}

export default Header;
