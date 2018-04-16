import React, { Component } from 'react'
import Header from './Header.js'
import './../App.css'

class Aera extends Component {

  constructor() {
    super()
    this.state = {
      places: []
    }
  }

  componentDidMount() {
    const token = "f83dfac2-6962-4cc8-a33a-70252aacfe67";
    const endpoint = "api.navitia.io/v1/coverage/"+this.props.coords+"/physical_modes/physical_mode%3ATramway/stop_areas/stop_area"+this.props.id+"/stop_schedules?";
    fetch('https://'+endpoint, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    }).then(results => {
      return results.json();
    }).then(data => {
      let places = data.stop_schedules.map((area) => {
        return(
          <div>
            <h1>{area.stop_point.label}</h1>
            <p>{area.display_informations.direction}</p>
            <p>{area.display_informations.name}</p>
          </div>
        )
      })
      this.setState({places: places })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="results-wrapper">
          <p>{this.state.places}</p>
        </div>
      </div>
    );
  }

}

export default Aera;
