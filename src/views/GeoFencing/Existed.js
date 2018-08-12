import React, { Component } from 'react';
import Gmap from './Gmap';
import Edit from "./Edit"
import  GeoMain from "./GeoMain"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google} from "react-google-maps"
import markerImg from "../../../../img/map_imarker(1).png"





const Existed = (props) => {

        return (
        <div>
            
     <Gmap
     isMarkerShown
     withGoogleMap
     center={ {lat: 32.163464, lng:34.796340}}
     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
     loadingElement={<div style={{ height: `100%` }} />}
     containerElement={<div className ="mapc" style={{ height: `30vh` }} />}
     mapElement={<div style={{ height: `100%` }}/>}   />

<GeoMain  />
         
</div> 
        );
      }
    
  
    export default Existed;
