import React, { Component } from 'react';
import { Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import './../App.css';

class Cards extends Component {

  render() {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.label}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.adminRegion}</h6>
            <p className="card-text"></p>
          </div>
        </div>
    );
  }
}

export default Cards;
