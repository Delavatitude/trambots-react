import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './../App.css';
import {
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements,
} from 'react-instantsearch/dom';
import './../App.css';
import location from './../img/location.png';
import navigation from './../img/navigation.png';

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
        <div className="card">
          <h6 className="card-header">{hit.stop}</h6>
          <div className="card-body">
            <p className="card-text"><img src={location} /> : {hit.city} </p>
            <p className="card-text"><img src={navigation} /> : {hit.mode}</p>
            <p className="card-text">Ligne : <img className="image_ligne" src={hit.image_ligne}/></p>
              <Link to={`/stop/${hit.code}/${hit.lat};${hit.lng}`}>
                <p className="read-more" >Voir horaires<i className="fa fa-angle-double-right ml-2"></i></p>
              </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
      <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebar" alt="aside">
              <nav className="sidebar-sticky pt-5">
                <ClearRefinements />
                <div>Filtres :</div>
                  <CurrentRefinements />
                  <RefinementList
                    attributeName="city"
                  />
                <div className="border-top mt-2 pt-2">Data inventory of <a href="http://www.facebots.fr/">facebots.fr</a></div>
              </nav>
            </div>

            <div className="col-md- ml-sm-auto col-lg-10 pt-3 px-4">
                <Hits hitComponent={Product} />
                <div className="pt-3 pb-3">
                  <Pagination />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
