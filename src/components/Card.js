import React, { Component } from 'react';
import './../App.css';

class Card extends Component {

  render() {
    return (
      <div>
          <p className="">{this.props.label}</p>
          <p>{this.props.timezone}</p>
      </div>
    );
  }
}

export default Card;
