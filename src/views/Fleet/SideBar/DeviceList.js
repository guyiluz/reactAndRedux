import React from 'react';
import { List,Checkbox,Label,Input } from 'semantic-ui-react'
import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'
import { componentDidMount } from 'react-google-maps/lib/utils/MapChildHelper';
import FeetDeviceLIstItem from './FeetDeviceLIstItem';
const DeviceList = props => {

    

if(props.mapState!=='device'){

    props.handleInitalState()
}

const list = props.list
.map((item,index)=>{

 const classNameForList =item.deviceId==props.deviceIdToBox?"active-fleet":""
  





    return(
        <div key={index} >
        
        <FeetDeviceLIstItem on={item.isOn} displyName={item.deviceDisplayName} handleDeviceLinkClick={props.handleDeviceLinkClick}  deviceId={item.deviceId}  handleToggle={props.handelDisplayOnMap}  checked={item.checked} /> 

        
        </div>


    )
})


   
    return (
        <div   className="fleet-dev-list" >
   
   <div  className="DevList-input">
  <Input   focus placeholder='Search...' />
  </div>

   <div  className="DevList-selectAll">
        <Checkbox  toggle onChange={props.handleSelectAll} checked={props.selectAll} label='Select all' />
   

        </div>
  <List className="DevList" >
 
  
    {list}
  </List>
    </div>

    );
};



export default DeviceList;