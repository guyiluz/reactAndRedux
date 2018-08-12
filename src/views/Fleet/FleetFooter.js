import React from 'react'
import {connect} from "react-redux";


  import FooterDeviceView from "./FooterDeviceView/FooterDeviceView"
import { EditorBorderBottom } from 'material-ui';
const FleetFooter = (props) => {

    const  fleetFlooterStyle ={
        position: "absolute",
        top: 645,
        zIndex: 998,
        background: "white",
        border:"solid 0.1px #d4d4d5",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        BorderBottom:"none"

    }




    return (
        <div style={fleetFlooterStyle}>


<div style={{minWidth: 258}}>

1
</div>


<div style={{
     display: "flex",
     width: "100%"
}} >

<FooterDeviceView props={props}/>
</div>
</div>



    )
}


const mapStateToProps = (state) => {
    return {
 
        



   
  


    };
};


const mapDispatchToProps = (dispatch) => {
    return {
    

    };
};






export default connect(mapStateToProps,mapDispatchToProps)(FleetFooter);


