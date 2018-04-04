import React, { Component } from 'react';
import Cards from './Card.js';
import './../App.css';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      places: []
    }
  }

  componentDidMount() {
    const token = "f83dfac2-6962-4cc8-a33a-70252aacfe67";
    const endpoint = "api.navitia.io/v1/coverage/fr-sw/physical_modes/physical_mode%3ATramway/stop_areas?";
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
        !this.state.places ? (
          <p>Loading</p>
        ) : (
            this.state.places.map((area) => {
              return <Cards
                label={area.name}
                timezone={area.timezone}
                adminRegion={area.administrative_regions[0].name}
              />
            })
        )
    );
  }
}

export default Home;
