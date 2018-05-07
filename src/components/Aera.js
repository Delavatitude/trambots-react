import React, { Component } from 'react'
import './../App.css'
import 'moment/locale/fr';
import Moment from 'react-moment'
import MapContainer from './MapContainer.js'
import { Link } from 'react-router-dom'

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
          if (area.date_times.length > 0) {
            return(
              <div className="col-md-6 float-left">
                <div className="card border-bottom rounded-0 mt-3">
                  <div className="card-header">
                    <div className="violet">{area.stop_point.label}</div>
                  </div>
                  <div className="card-body">
                    <p><i className="rouge fas fa-angle-double-right"></i> {area.display_informations.direction}</p>
                    <p><i className="text-success fas fa-clock"></i>
                      <span> <Moment fromNow ago>{area.date_times[0].date_time}</Moment></span> -
                      <span> <Moment fromNow ago>{area.date_times[1].date_time}</Moment></span> -
                      <span> <Moment fromNow ago>{area.date_times[2].date_time}</Moment></span>
                    </p>
                    <p>{area.display_informations.name}</p>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className="col-md-6 float-left">
                <div className="card border-bottom rounded-0 mt-3">
                  <div className="card-header">
                    <div className="violet">{area.stop_point.label}</div>
                  </div>
                  <div className="card-body">
                    <p><i className="rouge fas fa-angle-double-right"></i> {area.display_informations.direction}</p>
                    <p><i className="text-success fas fa-clock"></i>
                      <span> Terminus</span>
                    </p>
                    <p>{area.display_informations.name}</p>
                  </div>
                </div>
              </div>
            )
          }
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

          <header>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
              <Link to={'/'}>
                <i className="orange fas fa-angle-left ml-4"></i>
              </Link>
              <span className="orange navbar-brand mb-o pr-2">TramBots</span>
            </nav>
          </header>

          <div className="row">
            <div className="col-md-12 ml-sm-auto">
              <div className="m-auto">
                <div>{this.state.places}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="widthfix">
              <div className="map pt-3">
                <MapContainer lat={lat} lng={lng}/>
              </div>
            </div>
          </div>

        </div>
    );
  }

}

export default Aera;
