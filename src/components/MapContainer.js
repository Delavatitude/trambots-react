import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  render() {

    const lat = Number(this.props.lat);
    const lng = Number(this.props.lng);

    return (
      <Map google={this.props.google} zoom={17} initialCenter={{
            lat: lat,
            lng: lng
          }}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDM5yU3_By53FjHmBGwiMxQsjuACvhimzE")
})(MapContainer)
