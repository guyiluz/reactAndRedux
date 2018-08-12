/*global google*/
import React, { Component, } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google} from "react-google-maps"
import MapStyle from "../../mapStyle"
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");


const  Gmap = withScriptjs(withGoogleMap((props) =>

      <GoogleMap
    defaultZoom={14}

    
   
    defaultOptions={{  disableDefaultUI:true,styles:MapStyle

 }}>
 






    
  </GoogleMap>

))


export default (Gmap);