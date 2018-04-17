import React, { Component } from 'react'
import Header from './Header.js'
import './../App.css'
import Moment from 'react-moment'
import MapContainer from './MapContainer.js'

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
            <div><b>Direction :</b> {area.display_informations.direction}</div>
            <div>{area.display_informations.name}</div>
            <div> Prochain tram dans :
              <span> <Moment fromNow ago>{area.date_times[0].date_time}</Moment></span>,
              <span> <Moment fromNow ago>{area.date_times[1].date_time}</Moment></span>,
              <span> <Moment fromNow ago>{area.date_times[2].date_time}</Moment></span>
            </div>
          </div>
        )
      })
      this.setState({places: places })
    })
  }

  render() {
    let coordonnees = this.props.coords.split(";");
    let lng = Number(coordonnees[0]);
    let lat = Number(coordonnees[1]);

    return (
        <div>
          <Header />
          <div className="results-wrapper">
            <div>{this.state.places}</div>
          </div>
          <div className="mapGoogle">
            <MapContainer lat={lat} lng={lng}/>
          </div>
        </div>
    );
  }

}

export default Aera;
