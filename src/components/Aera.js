import React, { Component } from 'react'
import Header from './Header.js'
import './../App.css'
import Moment from 'react-moment'
import MapContainer from './MapContainer.js'
import signal from './../wifi-signal.png'
import direction from './../direction.png'

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
          <div className="card border-bottom rounded-0">
            <div className="card-body">
              <div className="text-pink">{area.stop_point.label}</div>
              <div className=""><img src={direction} /> {area.display_informations.direction}</div>
              <div>{area.display_informations.name}</div>
              <div><img src={signal} /> :
                <span> <Moment fromNow ago>{area.date_times[0].date_time}</Moment></span>,
                <span> <Moment fromNow ago>{area.date_times[1].date_time}</Moment></span>,
                <span> <Moment fromNow ago>{area.date_times[2].date_time}</Moment></span>
              </div>
            </div>
          </div>
        )
      })
      this.setState({places: places })
    }).catch(function(error) {
        console.log(error);
    })
  }

  render() {
    let coordonnees = this.props.coords.split(";");
    let lng = Number(coordonnees[0]);
    let lat = Number(coordonnees[1]);

    return (
        <div>
          <Header />
          <div className="container-fluid h-100">
            <div className="row row-area">
              <div className="col-4 result-area">
                <div className="results-wrapper margintop">
                  <div>{this.state.places}</div>
                </div>
              </div>
              <div className="col-8 result2-area">
                  <div className="map-area">
                    <MapContainer lat={lat} lng={lng}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

}

export default Aera;
