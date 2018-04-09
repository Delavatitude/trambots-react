import React, { Component } from 'react';
import { Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import './../App.css';

class Card extends Component {

  constructor() {
    super()
    this.state = {
      places: []
    }
  }

  componentDidMount() {
    const token = "f83dfac2-6962-4cc8-a33a-70252aacfe67";
    const endpoint = "api.navitia.io/v1/coverage/fr-sw/physical_modes/physical_mode%3ATramway/stop_areas/stop_area";
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
      this.setState({places: data.stop_areas})
    })
  }

  render() {
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.places.label}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.state.places.administrative_regions[0].name}</h6>
          </div>
        </div>
    );
  }
}

export default Card;
