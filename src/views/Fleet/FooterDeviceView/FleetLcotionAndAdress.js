import React from 'react';
import {Card, CardBody,CardHeader} from "reactstrap";
import FleetHaderBox from "../FleetHaderBox" 
import { Icon,Table } from 'semantic-ui-react'
import Geocode from "react-geocode";
import moment from "moment"


const FleetLcotionAndAdress = (props) => {



  






    const headerStyle={


        background: "#63c2de",
        color: "white"
      
      }
      const deviceRowData = [...props.data.props.deviceListToFooter]
     .filter((item)=>{
    return item.deviceId ==props.data.props.deviceIdToBox

     })
      let deviceName =""
const counitner=
     <div style={{
      marginBottom: 0,
      fontSize: "1rem",
      fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
  
  
          }} >  

          <div>
          <Icon  name='circle notched' />
           {deviceName = deviceRowData[0]==undefined?"":deviceRowData[0].deviceDisplayName} 
           



          </div>

           <div>
 
          </div>
                   

           </div>


const data=props.data.props
let locationDate="",
deviceStatus=""
if(data.deviceDashboardData.location!==undefined&&data.deviceDashboardData.location!==null){ 
  locationDate= data.deviceDashboardData.location.LocationDate 
}
if(data.deviceListToFooter.length!==0&&data.deviceIdToBox.length!==0){ 
  deviceStatus= [...data.deviceListToFooter]
  .find(item=>item.deviceId==data.deviceIdToBox).isOn
}

    return (
  <div>
<FleetHaderBox counitner={counitner} />
<Table  style={{
fontSize:"0.8rem",
margin:0

}} size="small"   singleLine fixed striped>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
        Address:
        </Table.Cell>
        <Table.Cell> {props.data.props.deviceAdress}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Time:
        </Table.Cell>
        <Table.Cell>{moment.unix(locationDate).format("MM/DD/YYYY HH:MM A")}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Device Status:
        </Table.Cell>
        <Table.Cell>{deviceStatus?"On":"Off"}</Table.Cell>
        
      </Table.Row>

      
      </Table.Body>
  </Table>

  </div>
       
    );
};

export default FleetLcotionAndAdress;