import React, { Component } from 'react'
import './../App.css'
import 'moment/locale/fr';
import Moment from 'react-moment'
import MapContainer from './MapContainer.js'
import { Link } from 'react-router-dom'

class Aera extends Component {

  constructor(props) {
    super(props)
    this.state = {
      places: []
    }
  }

  componentDidMount(props) {

    if(typeof this.props.coords !== "undefined") {
      localStorage.setItem( 'coords', this.props.coords );
      localStorage.setItem( 'code', this.props.code);
      localStorage.setItem( 'city', this.props.city);
    };
    let coords = localStorage.getItem( 'coords' );
    let code = localStorage.getItem( 'code' );
    let city = localStorage.getItem( 'city' );

    const token = "f83dfac2-6962-4cc8-a33a-70252aacfe67";
    const endpoint = "api.navitia.io/v1/coverage/"+coords+"/physical_modes/physical_mode:Tramway/stop_areas/stop_area"+code+"/stop_schedules?";
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
            const urlImg = "http://facebots.fr/TramBots/img/ligne/"+city+"/"+area.route.line.code+".png";
            return(
              <div className="col-md-12 float-left">
                <div className="card border-bottom rounded-0 mt-3">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-10 violet">{area.stop_point.label}</div>
                      <div className="col-md-2"><img className="float-right y30px" src={urlImg}></img></div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p><i className="rouge fas fa-angle-double-right"></i> {area.display_informations.direction}</p>
                    <p><i className="text-success fas fa-clock"></i>
                      <span> <Moment fromNow ago>{area.date_times[0].date_time}</Moment></span> -
                      <span> <Moment fromNow ago>{area.date_times[1].date_time}</Moment></span> -
                      <span> <Moment fromNow ago>{area.date_times[2].date_time}</Moment></span>
                    </p>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
               <div>
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
    if(typeof this.props.coords !== "undefined") {
      localStorage.setItem( 'coords', this.props.coords );
    };
    let coords = localStorage.getItem( 'coords' );

    let coordonnees = coords.split(";");
    let lng = Number(coordonnees[0]);
    let lat = Number(coordonnees[1]);

    return (
        <div className="h100">
          <nav className="navbar navbar-fixed-top navbar-dark bg-dark fixed">
            <div className="container-fluid decorationNone">
              <Link to={'/'}>
                <i className="orange fas fa-angle-left"></i>
              </Link>
              <span className="orange navbar-brand"><a className="orange" href="/">TramBots</a></span>
            </div>
          </nav>

          <div className="row raw">
            <div className="col-md-6 ml-sm-auto">
              <div className="m-auto">
                <div>{this.state.places}</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map col-md-12">
                <MapContainer lat={lat} lng={lng}/>
              </div>
            </div>
          </div>
        </div>
    );
  }

}

export default Aera;
