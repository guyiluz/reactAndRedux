import React, { Component } from 'react'
import Box from "./Box"
import {SET_TIMER_NAME,SET_MODE} from "../actions/items"
import {connect} from "react-redux";
import { stat } from 'fs';
class TimersBoxes extends Component {
  handleTimerObj=(e)=>{
    
    const timer=e.currentTarget.id
    
    this.props.SET_TIMER_NAME(timer)
    
    }



    handleStop=(e)=>{

   this.props.SET_MODE("setting")

    }


  render() {

    const boxCountinerStyle ={
      display: "flex"


    }
const {interval,medation,prepare,timerName }=this.props.timers

if(this.props.modes=="med"){
  return (
    <div className="boxCountiner" style={boxCountinerStyle}>
    <div  onClick={this.handleStop}>   
    <Box   id={"stop"}  time={"Stop"} />
    </div>
  
     <Box    id={"pause"}  time={"Pause"} />
    </div>
  )
  
}

    return (
      <div className="boxCountiner" style={boxCountinerStyle}>
       <Box handleTimerObj={this.handleTimerObj} timerName={this.props.timerName }  id={"prepare"}  header={"Get ready"} time={prepare}/>
       <Box handleTimerObj={this.handleTimerObj} timerName={this.props.timerName }     id={"medation"} header={"medation"} time={medation}/>
       <Box handleTimerObj={this.handleTimerObj} timerName={this.props.timerName } id={"interval"} header={"interval"} time={interval}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    timers:state.timers,
    timerName:state.timerName,
    modes:state.modes    


  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    SET_TIMER_NAME:(string)=>dispatch(SET_TIMER_NAME(string)),
    SET_MODE:(strig)=>dispatch(SET_MODE(strig))

    

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TimersBoxes);






