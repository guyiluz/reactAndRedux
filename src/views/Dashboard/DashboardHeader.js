import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
  Badge,
  Row,
  Col,
  Progress,
  Table
} from 'reactstrap';

import { Select } from 'semantic-ui-react'

import { Card,Statistic } from 'semantic-ui-react'
import DashboradCard from "./DashboradCard";
import Widget02 from "../../components/Widgets/Widget02";





const DashboardHeader = (props) => {
  let options=[]
  if(props.deviceLoad){
    options=  [...props.deviceList].map(item=>{
      const obj={}
      obj.text=item.deviceDisplayName
      obj.value=item.deviceId
     
     return obj
     
     
     })

     options.unshift({text:"All",value:0})
   }
  const boxShod= {    boxShadow:" 0px 4px 15px 0px #444d581c"}
 const {onlineUsers,totalCalls,totalSafezone,totalUsers} = props.dashboardTotalUsers
 
    return (
      <div className="DashboardHeader" >
        <Row>
        <Col xs="12" sm="6" lg="3" style={{marginBottom:4}}>

          </Col>

          <Col xs="12" sm="6" lg="3">




          </Col>


          <Col xs="12" sm="6" lg="3">


          </Col>
          <Col xs="12" sm="6" lg="3" style={{marginBottom:4}}>
     

      </Col>


   
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">

          <Widget02 style={boxShod} header={totalUsers} mainText="Total Devices" icon="fa fa-microchip" color="customPurple"/>


          </Col>

          <Col xs="12" sm="6" lg="3">

          <Widget02 style={boxShod} header={onlineUsers} mainText="online Devices" icon="fa fa-wifi" color="customPurple"/>



          </Col>


          <Col xs="12" sm="6" lg="3">
          <Widget02 style={boxShod} header={totalSafezone} mainText="Total Safezones" icon="fa fa-map-pin" color="customPurple"/>


          </Col>
          <Col xs="12" sm="6" lg="3">
          <Widget02 style={boxShod} header={totalCalls.toLocaleString()} mainText="Total Calls" icon="fa fa-cloud-download" color="customPurple"/>

      </Col>


   
        </Row>
        
      </div>
    )
  }


export default DashboardHeader;

