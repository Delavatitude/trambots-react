import React, { Component } from 'react';
import { InstantSearch, Hits } from 'react-instantsearch/dom';
import Search from './Search.js';
import Cards from './Card.js';
import './../App.css';

class Home extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <InstantSearch
          appId="Y5DW7VHBJH"
          apiKey="9249c14668c1f512f30755afcc178558"
          indexName="Stop"
        >
          <Search />
        </InstantSearch>
      </div>
    );
  }
}

export default Home;
