import React from 'react';
import FleetLcotionAndAdress from "./FleetLcotionAndAdress"
import FleetDeviceData from "./FleetDeviceData"
import {
    Row,
    Col
  } from 'reactstrap';

const FooterDeviceView = (props) => {
    return (
        <Row style={{width:"100%",padding:0, marginLeft:0}}>
        <Col style={{padding:0}}  xs="12" sm="4" lg="3"> 
<FleetLcotionAndAdress data={props} />
        </Col>
        <Col style={{margin:0,padding:0,paddingLeft:1}} xs="12" sm="8" lg="9"> 

         <FleetDeviceData  isFlyBy={props.props.isFlyBy} flyByNumber={props.props.flyByNumber}  deviceAnalizerStatis={props.props.deviceAnalizerStatis}       getFlyByData={props.props.getFlyByData} deviceId={props.props.deviceIdToBox} deviceList={props.props.deviceListToFooter} address={props.props.deviceAdress}  data={props.props.deviceDashboardData}/>
         </Col>
   
        </Row>

    );
};

export default FooterDeviceView;