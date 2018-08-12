import React, { Component } from 'react';
import Gmap from './Gmap';
import AlertBox from "./AlertBox"
import  GeoMain from "./GeoMain"
import { withScriptjs, withGoogleMap, GoogleMap, Marker,Polyline, icon, Google} from "react-google-maps"
import markerImg from "../../../../img/map_imarker(1).png"
import Search from "./Search"
import { Input ,Checkbox,Button } from 'semantic-ui-react'
import Slider from 'rc-slider';





const Edit = (props) => {
  


        const marks ={
0:"50m",
250:"150",
500:"500m"

        }
        return (
            <div>
            <Gmap
            isMarkerShown
            withGoogleMap
          
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9mbOueI353Xh6Aear6wNQ_Mt-DHpmZkc&libraries=geometry,places,drawing"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className ="mapc" style={{ height: `30vh` }} />}
            mapElement={<div style={{ height: `100%` }}/>}    
            drawingControl={true}       
              />
            <div className="map-filter-main">
            {al}
            <p className="title-page" >New Geo-fence</p>
<div  className= "map-main-first">
<div className="filter-box-first" >
 
<div className="title">Name</div>
<Input   icon="pencil" placeholder='Name'/>

</div>


<div className="filter-box-first" >
    
<div className="title">Address</div>
<Search/>

<div className="main-first" >
<Slider min={0} max={500} marks={marks} defaultValue={150} />

</div>

</div>


<div className="filter-box-first" >
<div className="title">Notify When
</div>
<div className="main-first">
<Checkbox label='IN'  defaultChecked 
/>
<Checkbox label='OUT' defaultChecked />
</div>
</div>


</div>

<div  className= "map-main-sec"> 
<div className="check-box">
<div className="check-header">Boundry
</div>
<div className="check-main">
<Checkbox label='City' />
<Checkbox label='State' />
<Checkbox label='Country' />
<Checkbox label='Naboughhood' />
<Checkbox label='Town' />

</div>


</div>
<div className="check-box">
<div className="check-header">ENVIRONMENT
</div>
<div className="check-main">
<Checkbox label='Resterant' />
<Checkbox label='Park' />
<Checkbox label='Parking Lot' />
<Checkbox label='Store' />
<Checkbox label='Highway' />

</div>


</div>
<div className="check-box">
<div className="check-header">Event
</div>
<div className="check-main">
<Checkbox label='Beahvour' />
<Checkbox label='Sensors' />
<Checkbox label='Activity' />
<Checkbox label='Status' />

</div>

<Button  color ="blue" onClick={this.saveSafeZone} >Save</Button>

</div>






</div>

           
            </div>
            </div>
        );
    }



    export default Edit
