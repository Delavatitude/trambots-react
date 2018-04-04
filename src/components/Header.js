import React, { Component } from 'react';
import { Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import './../App.css';

class Header extends Component {

  render() {
    return (
        <nav className="navbar navbar-dark bg-warning justify-content-between">
          <a className="navbar-brand text-white">TramBots</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </nav>
    );
  }
}

export default Header;
