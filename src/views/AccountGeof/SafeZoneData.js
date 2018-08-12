import React, { Component, PropTypes } from 'react'
import { Button,Form,Select,Table} from 'semantic-ui-react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox';

class SafeZoneData extends Component {
    render () {

      
const cssClass ={
input:"input"



},

adressStyle={
    input:{
        marginRight: "10%",
        marginTop: "14px",
        width: "99%",
        marginLeft: "7px"
        
    }

}




const {safeZoneData,deviceList,handleFormC,handeAdressC,disabled,setNewLatlng,isDrage}=this.props


// Handle search props and and syle 
let address =""
if(safeZoneData!==0&&isDrage!==true){address=safeZoneData.location.Address}
if(isDrage==true){address=this.props.address}

const inputProps = {
    value:address,
    onChange:handeAdressC,
    onBlur:setNewLatlng,
    name:"location.Address"
    
}


// select box data

let deviceTable  =[]

if(safeZoneData!==0){
    deviceTable = [...deviceList]
    .map((tr,index)=>{
    
        const isCheck= safeZoneData.deviceList.includes(tr.deviceId)
    
        // safeZoneData
    return    (
    
        <Table.Row key={index} >
        <Table.Cell>{tr.deviceICCID} </Table.Cell>
        <Table.Cell>{tr.deviceId} </Table.Cell>
        <Table.Cell>{tr.deviceDisplayName} </Table.Cell>
        <Table.Cell>{tr.modeName} </Table.Cell>
        {/* <Table.Cell>{tr.profile.profileName||"n/a"} </Table.Cell> */}
        <Table.Cell>     <Checkbox name={tr.deviceId} checked={isCheck} onChange={this.props.handleOnOff} /> </Table.Cell>
    
         </Table.Row> 
    
    
    
    )
      
     
    })
    
    }




if(safeZoneData==0){
return <div></div>

}
        return (
            <div className="mb-4">

   <Form>
        <Form.Group widths='equal'>



          <Form.Input  onChange={handleFormC}    name="safezoneName" fluid label='Name' value ={safeZoneData.safezoneName} />
     
      




          <Form.Input onChange={handleFormC} name="radius"   type="number" fluid label='Radius' value ={safeZoneData.radius} />
   

         </Form.Group>
         <label>Adress List</label>

         <PlacesAutocomplete  style={adressStyle}   classNames={cssClass}   inputProps={inputProps}  />
         <label>Devices </label>

         <Form.Group widths='equal'>
         
         <Table  style={{fontSize: "0.95rem"}}  >
  <Table.Header>
  <Table.Row>
    <Table.HeaderCell>ICCID</Table.HeaderCell>
    <Table.HeaderCell>Device Id</Table.HeaderCell>
    <Table.HeaderCell>Display Name</Table.HeaderCell>
    <Table.HeaderCell>Current mode</Table.HeaderCell>
    <Table.HeaderCell>On/Off</Table.HeaderCell>


  </Table.Row>
  </Table.Header>
  <Table.Body>
{deviceTable}
  </Table.Body>
</Table>









         </Form.Group>
        </Form>
        <Button onClick={this.props.saveSafezoneCore} name={this.props.btn} disabled={disabled} primary>{this.props.btn}</Button>
            </div>
        )
    }
}


export default SafeZoneData