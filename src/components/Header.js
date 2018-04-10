import React, { Component } from 'react';
import './../App.css';

class Header extends Component {

  render() {
    return (
      <header className="content-wrapper">
        <a href="https://community.algolia.com/instantsearch.js/" className="is-logo"></a>
        <a href="./" className="logo">TramBots</a>
        <div className="input-group">
          <section id="search">
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
