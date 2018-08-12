import React, { Component } from 'react'
import Slider from 'react-bootstrap-slider';
import { Icon } from 'semantic-ui-react'
import { stat } from 'fs';

export default class FleetHistoryConroller extends Component {
  constructor(props){
super(props)
this.state={
max:500,
min:100,
currentValue:250


}
  }


  changeValue=()=>{
    this.setState({
        currentValue: this.sliderRef.getValue()
      });
  
       this.props.HandleSpeendSliderBae(this.sliderRef.getValue())   
  }
  
    render() {

    return (

  <div className="FleetHistoryConroller">

  <div className="FleetHistoryConroller-silder">
   <p>Speed</p>

  <div style={
        {
            padding: "20px",
            width: "40%"
          }


      }> 

    <Slider
        reversed={true}

        
      ref={e => {
        if (e) this.sliderRef = e.mySlider;
      }}
    value={this.state.currentValue}
    change={this.changeValue}
    slideStop={this.changeValue}
    step={this.state.step}
    max={this.state.max}
    min={this.state.min}
 />    
    
      </div>
          
  </div>{
   this.props.btnState=="play"&&   <Icon style={{cursor: "pointer"}} id="play" onClick={this.props.getFlyByData} name="play" color="blue" size="large"/>

  }
  {
    this.props.btnState=="pause"&& <Icon style={{cursor: "pointer"}}  id="pause" onClick={this.props.HandleStop} name="pause" color="blue" size="large"/>

  }
  

  </div>
    
    )
  }
}
