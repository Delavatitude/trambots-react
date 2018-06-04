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
            <img src={logo} width="46" height="46" className="d-inline-block align-top ml-md-2 ml-2" alt="" />
          </a>
          <div className="text-center">
            <SearchBox
              translations={{placeholder: 'Rechercher un arrêt !'}}
            />
          </div>
          <div className="mr-3px decorationNone">
            <a href="/" className="orange display float-right mr-3 mt-1">TramBots</a>
            <a href="http://facebots.fr/TramBots/FAQ" target="_blank"><i class="far fa-2x fa-question-circle orange float-right mr-3"></i></a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
