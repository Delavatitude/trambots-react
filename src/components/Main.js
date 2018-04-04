import React, { Component } from 'react';
import Home from './Home.js';
import Header from './Header.js';
import './../App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container-fluid">
          <div className="row col-12">
            <Home></Home>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
