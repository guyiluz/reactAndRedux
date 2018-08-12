import React from 'react';
import { Tab } from 'semantic-ui-react'
import DeviceList from "./DeviceList"
import Events from "../Events/Events"
import History from "../History/History"


const SideBarContiner = props => {

    const panes = [

   
        { menuItem: 'Devices', render: () => <Tab.Pane><DeviceList 
        handleDeiceMode={props.handleDeiceMode}

handleSelectAll={props.handleSelectAll}   selectAll={props.selectAll} 
 handelDisplayOnMap={props.handelDisplayOnMap} list= {props.deviceList}
 handleDeviceLinkClick={props.handleDeviceLinkClick}
deviceIdToBox={props.deviceIdToBox}
handleInitalState={props.handleInitalState}
fleetMode={props.fleetMode}
mapState={props.mapState}
 /></Tab.Pane> },
 { menuItem: 'History', render: () => <Tab.Pane>
 <History  list= {props.deviceList}
          onFromDate={props.onFromDate}
          onToDate={props.onToDate}
          historyDevice={props.historyDevice}
          handleDeviceHistory={props.handleDeviceHistory} 
          fromDate={props.fromDate}
          toDate={props.toDate}
          getDeviceHistory={props.getDeviceHistory}
          deviceHistoryLoggger={props.deviceHistoryLoggger}
          handleClickOnHistoryLine={props.handleClickOnHistoryLine}
          historyLineSelect={props.historyLineSelect}
          handleSelectBoxHistory={props.handleSelectBoxHistory}
          


          
          

 />

</Tab.Pane> },
        { menuItem: 'Events', render: () => <Tab.Pane><Events 
        
        handleEvetClick={props.handleEvetClick}
        notificationId={props.notificationId} notificationsList={props.notificationsList}/></Tab.Pane> }
      ]
      
    return (
        <div  className="SideBarContiner" style={{ position:"absolute",top:69,background:"#fffff",zIndex:999}} >

<div className="">
<div  className=" mb-4">
<Tab 
 panes={panes} />
      </div>
      </div>
    
    </div>

    );
};


export default SideBarContiner;