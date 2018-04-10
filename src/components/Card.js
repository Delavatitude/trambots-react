import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Header from './Header.js';
import './../App.css';

class Aera extends Component {

  constructor() {
    super()
    this.state = {
      places: []
    }
  }

  componentDidMount() {
    const token = "f83dfac2-6962-4cc8-a33a-70252aacfe67";
    const endpoint = "api.navitia.io/v1/coverage/fr-sw/physical_modes/physical_mode%3ATramway/stop_areas/stop_area"+this.props.id;
    fetch('https://'+endpoint, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    }).then(results => {
      return results.json();
    }).then(data => {
      let places = data.stop_areas.map((area) => {
        return(
          <div>
            area.label
          </div>
        )
      })
      this.setState({places: data.stop_areas[0]})
    })
  }

  render() {
    console.log("yo", this.state.places);
    return (
      <div>
        <Header />
        <div className="results-wrapper">
          <h1>{this.state.places.label}</h1>
        </div>
      </div>
    );
  }
}

export default Aera;
