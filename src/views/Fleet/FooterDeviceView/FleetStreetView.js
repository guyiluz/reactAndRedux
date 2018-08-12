import {StreetView} from "react-google-map-street-view";
import React, { Component } from 'react'

export default class FleetStreetView extends Component {

  render() {
    const address = this.props.address.length==0?"israel":this.props.address

    let style ={height:"50px", width:'100%' }
    return (
 
                <div>

 <StreetView   mapStyle={{width:"92%",height:100 }}  style={{width:"98%" }} address={address} APIkey={"AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc"} streetView zoomLevel={15}/>

        </div>
    )
  }
}

