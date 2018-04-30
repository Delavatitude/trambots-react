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
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand" href="#">
            <img src={logo} width="50" height="50" className="d-inline-block align-top ml-md-2" alt="" />
          </a>
          <SearchBox />
          <a href="/" className="navbar-brand text-warning ml-md-3">TramBots</a>
        </nav>
      </header>
    );
  }
}

export default Header;
