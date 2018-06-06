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
            <div className="fb-like mr-3 fblike-mt" data-href="http://www.facebook.com/TramBots/" 
             data-layout="button_count" data-action="like" data-size="large" 
             data-show-faces="false" data-share="false">
            </div>
            <a href="/" className="orange display float-right mr-3 mt-1">TramBots</a>
            <a href="http://facebots.fr/TramBots/FAQ" target="_blank" alt="FAQ TramBots" title="FAQ TramBots"><i class="far fa-2x fa-question-circle orange float-right mr-3" title="FAQ TramBots" alt="FAQ TramBots"></i></a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
