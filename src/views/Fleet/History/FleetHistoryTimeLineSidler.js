import React, { Component } from 'react'
import Slider from 'react-bootstrap-slider';
import { Icon } from 'semantic-ui-react'
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
import Moment from 'react-moment';
const moment =require("moment")

export default class FleetHistoryTimeLineSidler extends Component {
  constructor(props){
super(props)
this.state={
 min:0,
max:this.props.silderLRageMax-1,

currentValue:this.props.currentValue


}
  }


  changeValue=()=>{
    this.setState({
        currentValue: this.sliderRef.getValue()
      });

     this.props.HandlerTimeLineChage(this.sliderRef.getValue())
  }

  componentWillReceiveProps(nextProps){
   if(this.props.currentValue!==nextProps.currentValue){
   
      this.setState({
   currentValue:nextProps.currentValue
   
        
      })
   
   }
   
   

     }
  
    render() {



    return (

      
  <div className="FleetHistoryTimeLineSidler">
<div className="timer">
{moment.unix(this.props.data[this.state.currentValue].SampleDate).format("MM/DD  HH:mm:ss")}


</div>
<div>            
</div>


    <Slider
      ref={e => {
        if (e) this.sliderRef = e.mySlider;
      }}
    value={parseInt(this.state.currentValue)}
    change={this.changeValue}
    slideStop={this.changeValue}
    max={parseInt(this.state.max)}
    min={parseInt(this.state.min)}
    ticks={[1, 2, 3, 4, 5, 6, 7]}

 />    
  
  
          

  

  </div>
    
    )
  }
}
