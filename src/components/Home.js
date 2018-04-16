import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import Search from './Search.js';
import './../App.css';

class Home extends Component {

  render() {
    return (
      <div>
        <InstantSearch
          appId="Y5DW7VHBJH"
          apiKey="9249c14668c1f512f30755afcc178558"
          indexName="stop_bdx"
        >
          <Search />
        </InstantSearch>
      </div>
    );
  }
}

export default Home;
