import React, { Component } from 'react'
import GmapFleetHistory from "./GmapFleetHistory"
const moment =require('moment')
import {setFleetmapState} from "../../../actions/fleet_action";


import {connect} from "react-redux";

const {             
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } = require("react-google-maps");


 class HistoryMap extends Component {

  
    handleSelectBoxHistory=(marker)=>{
        let historyLineSelect = [...this.props.historyMapState.historyLineSelect]
        historyLineSelect.push(marker.testIfSelected)
        const obj={historyLineSelect,isBounse:false}
             this.props.setFleetmapState(obj)
           }
    



         


  render() {



    let SelectLocToMap ={}
    let testArray =[...this.props.historyMapState.historyLineSelect]
    .map((item,index)=>{
        SelectLocToMap[item]=index
    
    })



  
    if(this.props.deviceHistoryData[0]!==undefined){

        const deviceLcotionHistory=[...this.props.deviceHistoryData]
        .filter((item,index)=>{
          if(item.GPSLat==null){
              return false
          }else{
              item.position=  {lat: item.GPSLat, lng:item.GPSLong}
          }
                  
       
           
  
              return item
          })
  
  
          let bounds = new google.maps.LatLngBounds()
      
              deviceLcotionHistory.map((item)=>{
              
                      bounds.extend(item.position)
              
                  
          
              })
       
  
  
      return (
          
          <div>
              <GmapFleetHistory
              isMarkerShown
              withGoogleMap
              containerElement={<div className ="mapc" style={{ height: `750px` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
              loadingElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              markers={deviceLcotionHistory}
              bounds={bounds}
              isBounse={this.props.historyMapState.isBounse}
              historyLine={this.props.historyLine}
              SelectLocToMap={SelectLocToMap}
              historyLineSelect={this.props.historyMapState.historyLineSelect}
              handleSelectBoxHistory={this.handleSelectBoxHistory}
          
              
              
              />
          </div>
      )
  }else{
  return <div>No Location data</div>
  
  }




}
 }

  



const mapStateToProps = (state) => {
    return {
        deviceHistoryData:state.deviceData.data,
        historyMapState:state.historyMapState

        

    };
};



const mapDispatchToProps = (dispatch) => {
    return {


        setFleetmapState:(obj)=>dispatch(setFleetmapState(obj)),

        
    
  
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(HistoryMap);


