import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Modal from 'react-responsive-modal';
import { InstantSearch,
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

  render() {

    function Product({ hit }) {
      return (
        <article className="hit">
          <div className="picture-wrapper">
              <span className="stop">
                <Link
                  to={`/area/${hit.code}`}>
                  <Highlight attribute="stop" hit={hit} />
                </Link>
              </span>
            <div className="city">
              <Highlight attribute="city" hit={hit} />
            </div>
            <div className="mode">
              <Highlight attribute="mode" hit={hit} />
            </div>
            <div className="img_ligne">
              <img src={hit.image_ligne}></img>
            </div>
          </div>
        </article>
      );
    }

    return (
      <div className="">
        <Header />
        <aside>
          <div id="clear-all"></div>
            <div className="facet-category-title facet">Filtres :</div>
          <section className="facet-wrapper">
            <div className="facet-category-title"></div>
            <div id="city" className="facet">
              <RefinementList attribute="city" />
            </div>
            <div id="categories">
              <CurrentRefinements />
              <ClearRefinements />
            </div>
          </section>
          <div className="thank-you">Data inventory of <a href="http://www.facebots.fr/">facebots.fr</a></div>
        </aside>

        <section id="search">
            <label><i className="fa fa-search" aria-hidden="true"></i><span className="sr-only">Search icons</span></label>
            <SearchBox />
            <a id="search-clear" href="#" className="fa fa-times-circle hide" aria-hidden="true" ><span className="clear-all"></span></a>
          </section>

        <div className="results-wrapper">
            <Hits hitComponent={Product} />
          <section id="pagination">
            <Pagination />
          </section>
        </div>
      </div>
    );
  }
}

export default Search;
