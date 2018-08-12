import React, { Component } from 'react'
import { Map, TileLayer, Marker,Polyline } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {StreetView} from "react-google-map-street-view";
import {connect} from "react-redux";


console.log(Map)
 class MapWithAMarkerClusterer extends Component {

  constructor(props) {
    super(props);
    this.state={
 zoom:5


    }
  }
  

  

  componentDidMount() {

  }


shouldComponentUpdate(nextProps, nextState) {
  console.log(nextProps.fleetLflyObj.GPSLat);
  return true
}


HandleZoomChage=(zoom)=>{
  this.setState({zoom})
  
  
  }

  render() {
    
    let mapOption={
     zoom:3,
     center:[51.0, 3.0]


    }
    const markers =[]
    if(this.props.fleetLflyObj.GPSLat!==undefined  &&this.props.fleetLflyObj.GPSLat!==null&&this.props.isFly)
  {
      
      console.log("map form flyby")
      markers.push(<Marker  position={[this.props.fleetLflyObj.GPSLat,this.props.fleetLflyObj.GPSLong]} />)
      mapOption.zoom=this.state.zoom
      mapOption.center=[this.props.fleetLflyObj.GPSLat,this.props.fleetLflyObj.GPSLong]
    
    }

else{

  this.props.dashLoction.map((item,index)=>{
    markers.push(<Marker key={index} position={[item.location.LatPosition,item.location.LongPosition]} />
    )
      })
      

}
if(this.props.isDeviceZoom==true){
  
  mapOption.zoom=16
  let center = [...this.props.dashLoction]
 .filter(item=>item.deviceId==this.props.deviceId)[0].location
 mapOption.center=[center.LatPosition,center.LongPosition]
 }





 


    return (
      <div  className="fleetMap" >
        <Map className="markercluster-map" center={mapOption.center} zoom={mapOption.zoom} onZoom ={(e)=> this.HandleZoomChage(e.sourceTarget._zoom)}>  maxZoom={25}>
  <TileLayer
    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

});

 <MarkerClusterGroup>
{markers}
</MarkerClusterGroup>
 
</Map>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  
      fleetLflyObj:state.fleetLflyObj,
      isFly:state.isFlyBy



  };
};

const mapDispatchToProps = (dispatch) => {
  return {


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapWithAMarkerClusterer);



