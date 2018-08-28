import React, { Component } from 'react'
import Box from "./Box"
import {SET_TIMER_NAME} from "../actions/items"
import {connect} from "react-redux";
class TimersBoxes extends Component {
  handleTimerObj=(e)=>{
    
    const timer=e.currentTarget.id
    
    this.props.SET_TIMER_NAME(timer)
    
    }


  render() {
const {interval,medation,prepare}=this.props.timers



    return (
      <div className="boxCountiner">
       <Box handleTimerObj={this.handleTimerObj}  id={"prepare"} header={"Get ready"} time={prepare}/>
       <Box handleTimerObj={this.handleTimerObj}   id={"medation"} header={"medation"} time={medation}/>
       <Box handleTimerObj={this.handleTimerObj} id={"interval"} header={"interval"} time={interval}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    timers:state.timers      


  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    SET_TIMER_NAME:(string)=>dispatch(SET_TIMER_NAME(string))

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TimersBoxes);






