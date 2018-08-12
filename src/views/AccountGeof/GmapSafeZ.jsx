import React, { Component, } from 'react';
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class GmapSafeZ extends Component {
  render() {
    const position =  {
      lat: 51.505,
      lng: -0.09,
      zoom: 14,
    }
  
    return (
      <div className="GmapSafeZ" > 


 
      <Map center={this.props.center} zoom={14}>
      <TileLayer
           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
         />
       <Marker onDragEnd={(e)=> this.props.HandleMarkerDrag(e.target._latlng)} draggable={true} position={this.props.center}>

        </Marker>
      
      </Map>

           </div>
      )
  }
}


export default GmapSafeZ