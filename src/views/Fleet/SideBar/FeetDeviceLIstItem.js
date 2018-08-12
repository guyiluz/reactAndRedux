import React from 'react';
import { Checkbox, Icon, List } from 'semantic-ui-react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const FeetDeviceLIstItem = (props) => {


    const listStyle = {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: 'Montserrat',
        fontSize: "14px",
        border: "solid 0.1px #d4d4d5",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        marginBottom: 8,
        paddingTop: 4,
        maxWidth: 217,
        paddingLeft:3


    }

    return (
        <List.Item style={listStyle} >
            <div>
                <Checkbox size="mini" onChange={props.handleToggle} id={props.deviceId} checked={props.checked} toggle />

            </div>


            <div >
                <Link id={props.deviceId} onClick={props.handleDeviceLinkClick} style={{ marginLeft: "6px" }} to={{ pathname: `http://testws.hereo.co.uk/logs/sdf.txt` }}>{props.deviceDisplayName}  {props.displyName}
                </Link>
            </div>
            <div style={{marginTop:-3}} >

                <Icon size="mini" style={{ paddingBottom: "8px" }} color={props.on == true ? "green" : "red"} name='circle' />
            </div>
        </List.Item >

    );
};

export default FeetDeviceLIstItem;


