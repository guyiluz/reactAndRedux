/*global google*/
import React, { Component, } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google,InfoWindow} from "react-google-maps"
import moment from "moment"
import { Icon,Table } from 'semantic-ui-react'
import blueIcon  from '../../../containers/temp/device/overView/img.png' 
import MapStyle from "../../../containers/Fleet/fleeTmapStyle.json"
const  Gmap = withScriptjs(withGoogleMap((props) =>


      <GoogleMap
      defaultZoom={18}
    onIdle={props.onMapIdle}
    defaultOptions={{ styles:MapStyle

    }}
     



    defaultCenter={{ lat: props.markers[0].position.lat, lng: props.markers[0].position.lng }}

  //   ref={(map) => { 
  // if(props.isBounse){
  //   map&& map.fitBounds(props.bounds)}
  // }
  //    }

   
 >


 {
   
   
   props.markers.map((item,index)=>{
     let testIfSelected =item.SampleDate
  if(Object.keys(props.SelectLocToMap).length!== 0&&props.SelectLocToMap[testIfSelected]!==undefined){
    let  marker={testIfSelected}
    return(
      <Marker
      key={index}
        position={{lat:item.position.lat, lng:item.position.lng}}
        options={{icon:blueIcon,
          labelClass:window.iconTest}}

        onClick={props.handleSelectBoxHistory.bind(this,marker)}   
        >
                 {<InfoWindow>
 
     <div>
     <Table unstackable>
    <Table.Body>
      <Table.Row>
      <Table.Cell >
         <Icon name="wifi"/> SignalQ
        </Table.Cell>
        <Table.Cell >
 {item.SignalQ?item.SignalQ:"n/a"}
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
      <Table.Cell >
         <Icon name="map pin"/> Lat/Lng


        </Table.Cell>
        <Table.Cell >
 {`${item.position.lat}/ ${item.position.lng}`}
        </Table.Cell>
        
      </Table.Row>
      <Table.Row>
      <Table.Cell >
         <Icon name="time medium"/> Date
        </Table.Cell>
        <Table.Cell >
{moment.unix(item.SampleDate).format("MM/DD   HH:mm:ss")}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

     </div>

   


      </InfoWindow>}
    
        
        </Marker>
      )



  }  else if (props.historyLine!==item.SampleDate){
    let  marker={testIfSelected}
    return(
      <Marker
      key={index}
        position={{lat:item.position.lat, lng:item.position.lng}}
        options={{icon:null}}

        onClick={props.handleSelectBoxHistory.bind(this,marker)}   
        >
    
        
        </Marker>
      )
  }


 })}
  
  



    
  </GoogleMap>

))


export default (Gmap);