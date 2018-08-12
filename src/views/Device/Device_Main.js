import React from 'react'
import Device_table from "./Device_table"
import ToggleDisplay from 'react-toggle-display';
import { Button,Input,Form,TextArea } from 'semantic-ui-react'



import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table
  } from 'reactstrap';


const Device_Main = (props) => {
 const showHide=()=>{
if(props.deviceListShowHide){
props.getListShowHide(false)
 }else{
  props.getListShowHide(true)
  
 }
}
const btnDivStyle ={
  display: "flex",
  justifyContent: "space-between"


}



const ActivateDeviceModal=()=>{
const ShowHide = !props.showDevActiveModal
props.getShowDevActiveModal(ShowHide)

 

}


const {handleSearchChange,handleSearchFromSubmit} =props
    return (
        <div > 
          <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
  
              <CardBody>
              <p className="App-intro">  </p>
              <div className="tableBtn">
              <div style={btnDivStyle}>
              <Button primary onClick={() => showHide()}>Advanced Search</Button>
              <Button secondary onClick={() => ActivateDeviceModal()}>Activate Device</Button>
             
              </div>
              <div>
        
              </div>
              </div>
    
      
        <ToggleDisplay show={props.deviceListShowHide}>
        <Form >
    <Form.Group widths='equal'>
      <Form.Field  onChange={handleSearchChange} id='deviceId' control={Input} label='Device Id' placeholder='DeviceId' />
      <Form.Field  onChange={handleSearchChange}  id='deviceICCID' control={Input} label='Device ICCID' placeholder='Device ICCID' />
    </Form.Group>
    <Form.Group widths='equal'>
    <Form.Field   id='deviceDisplayName' control={Input} label='Display Name' placeholder='Display Name' />
    <Form.Field  onChange={handleSearchChange} id='coreProfileId' control={Input} label='Profile Id' placeholder='Profile Id' />
    </Form.Group>

  </Form>

 
        </ToggleDisplay>

       
                <Device_table 
              negative={ActivateDeviceModal}
              {...props}
                
                />
              </CardBody>
              <div className="pagetBtn" > {props.pagetBtn}</div>
             
            </Card>
          </Col>
        </Row>
      </div>  

 
        </div>
    )
}

export default Device_Main