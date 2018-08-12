import React, { Component, } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google} from "react-google-maps"
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");


const  GmapSafeZ = withScriptjs(withGoogleMap((props) =>

      <GoogleMap
    defaultZoom={14}

    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    center={props.center}

 >
 
 {props.marker}





    
  </GoogleMap>

))


export default (GmapSafeZ);