import React, { Component} from 'react'

class GeoFList extends Component {
    render () {
    const safeZones=  [...this.props.list]   

    .map((item,index)=>{
   return (

        <li  key={index} className="nav-item">
        <a name={item.safeZoneId} onClick={this.props.aTagClick} >{item.safezoneName}  </a> 
       
      </li>

   )
     

    })
        return (
            <div>
               {safeZones} 
            </div>
        )
    }
}


export default GeoFList