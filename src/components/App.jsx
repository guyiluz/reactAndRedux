import Timer from "../containers/Timer"
import TimersBoxes from "../containers/TimersBoxes"
import React, { Component } from 'react'

export default class App extends Component {
constructor(props) {
  super(props)


}





  render() {

    const continerStyle ={

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height:"100%",
      justifyContent: "center"


    }
    return (
    
          <div style ={continerStyle}>
     <Timer    />
     <TimersBoxes   />
        </div>
    
    )
  }
}




