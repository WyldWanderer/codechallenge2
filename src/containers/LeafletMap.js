import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from './AllMarkers';

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    //moved center and zoom into state for easier updating when centering on new location
    this.state = {
      center : [39.750809, -104.996810],
      zoom : 4
    };
  }

  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.state.center}
          zoom={this.state.zoom}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
