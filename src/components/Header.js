import React, { Component } from 'react';
import { Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import './../App.css';

class Header extends Component {

  render() {
    return (
      <header class="content-wrapper">
        <a href="https://community.algolia.com/instantsearch.js/" class="is-logo"></a>
        <a href="./" class="logo">TramBots</a>
        <div class="input-group">
          <section id="search">
            <label for="search-input">
              <span className="sr-only">Search icons</span>
            </label>
            <a id="search-clear" href="#" className="fa fa-times-circle hide" aria-hidden="true" >
              <span className="clear-all"></span>
            </a>
          </section>
        </div>
      </header>
    );
  }
}

export default Header;
