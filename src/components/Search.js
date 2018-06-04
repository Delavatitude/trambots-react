import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './../App.css';
import {
  Hits,
  RefinementList,
  Pagination,
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
      const stop = hit.stop;
      const re = / /gi;
      const urlStop = stop.replace(re, '_');
      const pathAera = '/stop/'+urlStop+'/'+hit.lat+';'+hit.lng;
      return (
        <div className=" card-item float-left">
          <div className="card">
            <h6 className="card-header">{hit.stop}</h6>
            <div className="card-body">
              <p className="card-text"><i className="fas fa-1x fa-compass orange" size="5" alt={hit.city} />  : {hit.city} </p>
              <p className="card-text"><i className="fas fa-1x fa-chevron-circle-right green" alt={hit.mode}/> : {hit.mode}</p>
              <p className="card-text">Ligne : <img className="image_ligne" src={hit.image_ligne} alt="ligne"/></p>
                <Link to={{ pathname: pathAera, code: hit.code, coords: hit.lat+';'+hit.lng, city: hit.city}} >
                  <p className="read-more" >Voir horaires<i className="fa fa-angle-double-right ml-2"></i></p>
                </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
      <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebar display" alt="aside">
              <nav className="sidebar-sticky pt-3">
                <div>Villes :</div>
                  <RefinementList
                    attribute="city"
                    showMore={true}
                  />
                <div className="pt-2">Moyen de transport :</div>
                  <RefinementList
                    attribute="mode"
                  />
                <div className="border-top mt-2 pt-2">Data inventory of <a href="http://www.facebots.fr/" target="_Blank" alt="Facebots" title="Facebots.fr">facebots.fr</a></div>
              </nav>
            </div>

            <div className="col-md- ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="row">
                  <div className="col-md-12 text-secondary text-center">
                    <p>Contactez <a href="https://m.me/trambots?ref=TramBots.fr">TramBots</a> sur Messenger !</p>
                  </div>
                  <div className="col-md-12 ml-sm-auto">
                    <Hits hitComponent={Product} />
                  </div>
                </div>
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
