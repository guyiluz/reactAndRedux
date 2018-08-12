import React from 'react';
import FleetHaderBox from '../FleetHaderBox'
import { Icon,Table } from 'semantic-ui-react'
import FleetStreeView from './FleetStreetView'


import { Button } from 'semantic-ui-react'
import {StreetView} from "react-google-map-street-view";
import {connect} from "react-redux";

import FleetDeviceViewConitner from "./FleetDeviceDataViewAndStyle/FleetDeviceViewConitner"
import DronStl from "./DronStl"
import {Row,Col} from 'reactstrap';
 


const FleetDeviceData = (props) => {
  const cellStyle ={
    color: "#333333",
    fontWeight: "bolder"
   }

    const counitner= <FleetDeviceViewConitner/>


         let TableData=       <div>
<Icon style={{
            width: "50%",
            marginTop:"5%"

         }} loading name='spinner' />
         </div>,
         
         
         StreetViewBox =      <div>
         <Icon style={{
                     width: "50%",
                     marginTop:"25%"
         
                  }} loading name='spinner' />
                  </div> 

 if(props.deviceList.length!==0&&props.data.GetDeviceDashboardDataResult!==undefined&&typeof(props.address)!=="object"||props.isFlyBy){
  StreetViewBox =        <StreetView  mapStyle={{width:"98%",height:100,marginLeft:-13 }}  style={{width:"98%" }} address={props.address} APIkey={"AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc"} streetView zoomLevel={15}/>

  const deviceDataFromList = [...props.deviceList]
 .find(item=>item.deviceId ==props.deviceId)
TableData=  
<div>

<Table  style={{
fontSize:"0.8rem",
margin:0

}} size="small"   singleLine fixed striped>
 <Table.Body>
      <Table.Row>
        <Table.Cell style={cellStyle} >
         <Icon name="battery medium"/> Battery


        </Table.Cell>
        <Table.Cell>{props.data.battery}</Table.Cell>
        <Table.Cell style={cellStyle}>
        <Icon name="user circle outline

medium"/>     
        Profile:
        </Table.Cell>
        <Table.Cell>{deviceDataFromList.profile? deviceDataFromList.profile.profileName:"n/a"}</Table.Cell>
        <Table.Cell style={cellStyle}>
        <Icon name="cube"/>     
        Mode:
        </Table.Cell>
        <Table.Cell>{deviceDataFromList.modeName}</Table.Cell>
        
    
      </Table.Row>


      
      <Table.Row>

     
        <Table.Cell  style={cellStyle} >
        <Icon name="road"/> 
        GSM RSSI:
        </Table.Cell>
        <Table.Cell>{props.data.SignalQ}</Table.Cell>
        <Table.Cell  style={cellStyle} >
        <Icon name="move"/> 
        Heading :
        </Table.Cell>
        <Table.Cell>{props.data.Heading}</Table.Cell>
        <Table.Cell  style={cellStyle} >
        <Icon name="magic"/> 

        Altitude:
        </Table.Cell>
        <Table.Cell>{props.data.AltitudeCalc}</Table.Cell>
        
      </Table.Row>
        
   
      <Table.Row>
        <Table.Cell  style={cellStyle} >
        <Icon name="thermometer full"/> 


   


        Temperature:
        </Table.Cell>
        <Table.Cell>{props.data.temprature?props.data.temprature:"n/a"}</Table.Cell>
        <Table.Cell  style={cellStyle} >
        <Icon name="bar graph"/> 




        Barometric:
        </Table.Cell>
        <Table.Cell>"n/a"</Table.Cell>
        <Table.Cell  style={cellStyle}>
        

  <Icon name="bullseye"/> 

        Humidity:
        </Table.Cell>
        <Table.Cell>{props.data.humidity?props.data.humidity:"n/a"}</Table.Cell>
        
      </Table.Row>

      
      </Table.Body>
  </Table>

</div>

console.log(":flyBy")

if(props.isFlyBy){
  let data =props.fleetLflyObj

  let droneData = {
Roll:data.Roll,
Pitch:data.Pitch

  }

  StreetViewBox =   <DronStl data={ droneData} />
  
//   <STLViewer url="https://builder.hereofamily.com/stl/1.stl"  width={"145"}
// height={100}  z={data.Roll==null?5:data.Roll} x={data.Pitch==null?3:data.Pitch}  modelColor='#FF0000'/>

  
  TableData=
<div>

<Table  style={{
fontSize:"0.8rem",
margin:0

}} size="small"   singleLine fixed striped>
 <Table.Body>
      <Table.Row>
        <Table.Cell style={cellStyle} >
         <Icon name="battery medium"/> Battery


        </Table.Cell>
        <Table.Cell>{data.Battery}</Table.Cell>
        <Table.Cell style={cellStyle}>
        <Icon name="user circle outline

medium"/>     
        Profile:
        </Table.Cell>
        <Table.Cell>{deviceDataFromList.profile? deviceDataFromList.profile.profileName:"n/a"}</Table.Cell>
        <Table.Cell style={cellStyle}>
        <Icon name="cube"/>     
        Mode:
        </Table.Cell>
        <Table.Cell>{deviceDataFromList.modeName}</Table.Cell>
        
    
      </Table.Row>
      <Table.Row>
        <Table.Cell  style={cellStyle} >
        <Icon name="road"/> 
        Altitude:
        </Table.Cell>
        <Table.Cell>{data.Moved ? data.Moved :"n/a"}</Table.Cell>
        <Table.Cell  style={cellStyle} >
        <Icon name="move"/> 
        Heading:
        </Table.Cell>
        <Table.Cell>{data.Heading ? data.Heading:"n/a"}</Table.Cell>
        <Table.Cell  style={cellStyle} >
        <Icon name="magic"/> 

        Speed:
        </Table.Cell>
        <Table.Cell>{data.Speed? data.Speed:"n/a"}</Table.Cell>
        
      </Table.Row>
        
   
      <Table.Row>
        <Table.Cell  style={cellStyle} >
        <Icon name="thermometer full"/> 
        Temperature:
        </Table.Cell>
        <Table.Cell>{data.Temprature?data.Temprature:"n/a"}</Table.Cell>
        <Table.Cell  style={cellStyle} >
        <Icon name="bar graph"/> 




        Barometric:
        </Table.Cell>
        <Table.Cell>{data.Barometric?data.Barometric:"n/a"}</Table.Cell>
        <Table.Cell  style={cellStyle}>
        

  <Icon name="bullseye"/> 

        Humidity:
        </Table.Cell>
        <Table.Cell>{data.Humidity?data.Humidity:"n/a"}</Table.Cell>
        
      </Table.Row>

      
      </Table.Body>
  </Table>

</div>
}





 }

 const flyByDiv =<Table  style={{
  fontSize:"0.8rem",
  margin:0
  
  }} size="small"   singleLine fixed striped>
   <Table.Body>
        <Table.Row>
          <Table.Cell style={cellStyle} >
          <Button fluid color="green"  onClick={props.getFlyByData} id="play" size="small">Play</Button>


          </Table.Cell>
          
        </Table.Row>
        
        <Table.Row>
          <Table.Cell style={cellStyle} >
          <Button fluid color="red"  onClick={props.getFlyByData} id="pause" size="small">Pause</Button>

  
          </Table.Cell>
          
        </Table.Row>
     
        
        </Table.Body>
    </Table>
          




    return (
        <div>
          <FleetHaderBox counitner={counitner} />
          <Row style={{paddingLeft:0}}  >
        <Col style={{paddingLeft:15,paddingRight: 0}}  xs="12" sm="4" lg="10">
        {TableData} 
        </Col>

     <Col style={{paddingLeft:15,paddingRight: 0}}  xs="12" sm="4" lg="2">
 {StreetViewBox}
        </Col>
        </Row>

      
        </div>
    );
};




const mapStateToProps = (state) => {
  return {
  
      fleetLflyObj:state.fleetLflyObj,



  };
};

const mapDispatchToProps = (dispatch) => {
  return {


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FleetDeviceData);
