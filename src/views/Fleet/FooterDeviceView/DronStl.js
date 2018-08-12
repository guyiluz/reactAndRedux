import React, { Component } from 'react'
import STLViewer from 'stl-viewer'

export default class DronStl extends Component {



    shouldComponentUpdate(nextProps){
  if(nextProps.data.Roll==this.props.data.Roll){

    return false

  }else{
      return true
  }



    }

  render() {
const {data}= this.props


    return (
    
          <STLViewer url="https://builder.hereofamily.com/stl/1.stl"  width={"145"}
height={100}  z={data.Roll==null?5:data.Roll} x={data.Pitch==null?3:data.Pitch}  modelColor='#FF0000'/> 
   
    )
  }
}
