import React, { Component } from 'react'
const { compose, withProps, withHandlers } = require("recompose");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
import { Label } from 'semantic-ui-react'
import mapD from "./mapD.json"
import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'


const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
    withProps({
      googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
      onMarkerClustererClick: () => (markerClusterer) => {
        const clickedMarkers = markerClusterer.getMarkers()

      },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 31.0391667, lng: 3.525 }}
      style={{zIndex:0}}
         
    defaultOptions={{  disableDefaultUI:false

    }}>
    
      
  
    
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }} >
             {
              <InfoWindow >
    

 <Link to={{ pathname:'/devicedata', search:`${marker.deviceId}`}}>{marker.deviceDisplayName}</Link>
        </InfoWindow>
        
             }  


       
        </Marker>
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
  
  





class DashbordMap extends Component {
 state={
   

 }



    render () {
      
        const markers = [...this.props.deviceLoaction]
        .map((marker)=>{

        let item= {}
        item.lat=marker.location.LatPosition
        item.lng=marker.location.LongPosition
        item.deviceDisplayName =marker.deviceDisplayName
        item.deviceId = marker.deviceId
        
           return item

        })
        // lat: marker.latitude, lng: marker.longitude
        return (
            <div className="dashBordMap" >
  <MapWithAMarkerClusterer markers={markers} />   </div>
        )
    }
}

export default DashbordMap






