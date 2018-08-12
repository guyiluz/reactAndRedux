import React, { Component} from 'react'
import GmapSafeZ from "./GmapSafeZ";



class GeoAmain extends Component {
    render () {
     const {safeZoneData,isDrage,FromMarker}= this.props
   

     let center=[-34.397, 150.644] 
     
     
     if(safeZoneData!==0){
        center=  [ safeZoneData.location.LatPosition, safeZoneData.location.LongPosition]
        
      
     }

        
     if(isDrage){
        center=  [ FromMarker.LatPosition, FromMarker.LongPosition]
        
      
     }

        return (
            <div>
                <GmapSafeZ 
                 HandleMarkerDrag={this.props.HandleMarkerDrag} s
            withGoogleMap
            center={center}
    
            />
             
            </div>
          
        )
    }
}


export default GeoAmain