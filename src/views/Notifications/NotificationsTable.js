import React from 'react';
import {CSVLink, CSVDownload} from 'react-csv';
import Moment from 'react-moment';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


const NotificationsTable = (props) => {

    let dataTable=   [].concat(props.notificationsList) 

    dataTable=dataTable.map((item,index)=>{
      let read = "No"
   if(item.isRead==true){

    read="Yes"
   }
   if(props.device!==undefined){
    return(
      <Table.Row key={index}>


      <Table.Cell>  {item.profileName}   </Table.Cell>
      <Table.Cell>  {item.alertTypeName}   </Table.Cell>
      <Table.Cell>  {item.notificationText}   </Table.Cell>
      <Table.Cell>  
      <Moment format="YYYY/MM/DD HH:mm"  unix>{item.createdDate}</Moment>

        </Table.Cell>
     
        </Table.Row>
   )
  
     

   }
       
        return(
           <Table.Row key={index}>
    
           <Table.Cell>  {item.deviceId}   </Table.Cell>
           <Table.Cell>  {item.deviceICCID}   </Table.Cell>
           <Table.Cell>  {item.profileName}   </Table.Cell>
           <Table.Cell>  {item.alertTypeName}   </Table.Cell>
           <Table.Cell>  {item.notificationText}   </Table.Cell>
           <Table.Cell>  
           <Moment format="YYYY/MM/DD HH:mm"  unix>{item.createdDate}</Moment>

             </Table.Cell>
           <Table.Cell>  {read} </Table.Cell>
          
             </Table.Row>
        )
       
                 
       
       
       
       
               })
                       
            
       if(props.device!==undefined){
        return (
          <div>
             <div> 
       

    
    <Table compact   className="text-capitalize" >
    <Table.Header>
    <Table.Row>

      <Table.HeaderCell>Profile Name</Table.HeaderCell>
      <Table.HeaderCell>Alert Type</Table.HeaderCell>
      <Table.HeaderCell>Notification</Table.HeaderCell>
      <Table.HeaderCell>Created Date</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {dataTable}
    </Table.Body>
  </Table> 
  </div>  
          </div>
      )

       }
       
               return (
                   <div style={{minHeight:"500px"}}>
                      <div> <CSVLink data={props.notificationsList} >Download CSV</CSVLink>
                
       
             
             <Table responsive  className="profile-table text-capitalize" >
             <Table.Header>
             <Table.Row>
               <Table.HeaderCell>Device </Table.HeaderCell>
               <Table.HeaderCell>Device ICCID</Table.HeaderCell>
               <Table.HeaderCell>Profile Name</Table.HeaderCell>
               <Table.HeaderCell>Alert Type</Table.HeaderCell>
               <Table.HeaderCell>Notification</Table.HeaderCell>
               <Table.HeaderCell>Created Date</Table.HeaderCell>
               <Table.HeaderCell>Read</Table.HeaderCell>
             </Table.Row>
             </Table.Header>
             <Table.Body>
             {dataTable}
             </Table.Body>
           </Table> 
           </div>  
                   </div>
               )
            }

export default NotificationsTable;