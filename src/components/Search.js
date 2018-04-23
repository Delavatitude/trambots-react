import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './../App.css';
import {
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements
} from 'react-instantsearch/dom';
import './../App.css';

class Search extends Component {

  constructor() {
    super()
    this.state = {
      places: [],
      lat_long: {
        coord: []
      }
    }
  }

  render() {

    function Product({ hit }) {
      return (
        <div className="">
          <div className="">
              <span className="">
                <Link
                  to={`/stop/${hit.code}/${hit.lat};${hit.lng}`}>
                  <Highlight attribute="stop" hit={hit} />
                </Link>
              </span>
            <div className="">
              <Highlight attribute="city" hit={hit} />
            </div>
            <div className="">
              <Highlight attribute="mode" hit={hit} />
            </div>
            <div className="">
              <img src={hit.image_ligne} alt="yo"></img>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
      <Header />
        <div className="container-fluid">
          <row>
            <div id="aside" className="border-right" alt="aside">
              <nav className="options">
                <div id="clear-all"></div>
                <div className="">Filtres :</div>
                <div className="">
                  <div id="categories">
                    <CurrentRefinements />
                    <ClearRefinements />
                    <div id="city" className="facet">
                      <RefinementList attribute="ligne" />
                    </div>
                  </div>
                </div>
                <div className="">Data inventory of <a href="http://www.facebots.fr/">facebots.fr</a></div>
              </nav>
            </div>

            <div id="content">
              <div className="container-fluid">
                  <div className="search">
                      <SearchBox />
                  </div>
                  <div class="pagination">
                    <Pagination />
                  </div>
                  <div className="container hitList">
                    <Hits hitComponent={Product} />
                  </div>
              </div>
            </div>
          </row>
        </div>
      </div>
    );
  }
}

export default Search;
