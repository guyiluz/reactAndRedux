import React, { Component } from 'react'
import Box from "./Box"

import {connect} from "react-redux";
class TimersBoxes extends Component {
  render() {
const {interval,medation,prepare}=this.props.timers

    return (
      <div className="boxCountiner">
       <Box header={"Get ready"} time={prepare}/>
       <Box header={"2"} time={"test"}/>
       <Box header={"3"} time={"test"}/>
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


  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TimersBoxes);






