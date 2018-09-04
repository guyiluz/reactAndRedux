import Timer from "../containers/Timer"
import TimersBoxes from "../containers/TimersBoxes"
import React, { Component } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'

export default class App extends Component {
constructor(props) {
  super(props)
 this.state={
hidden:false

 }

}

hide=()=>{
this.setState({
hidden:true

})

}



  render() {

    const continerStyle ={

      display: "flex",
      flexDirection: "column",

      height:"100%",
      justifyContent: "center"


    }


    const continerStyleTimerTimersBoxes ={

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height:"100%",
      justifyContent: "center"


    }



    const  timerAndButtonStyle ={

      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
     
    }


    const startBtnStyle ={
      
        "height": "74px",
        "width": "281px",
        "borderRadius": "8px",
        "margin": "10px",
        "cursor": "pointer",
        "backgroundImage": "linear-gradient(to top, rgb(243, 243, 243) 0%, rgb(151, 217, 225) 100%)",
        "textAlign": "center",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "fontSize": "54px",
        "color": "#d6b1da",
        "marginTop": "29px"
      


    }
    return (
    
          <div style ={continerStyle}>

          <div style={timerAndButtonStyle}>

        <div  style ={continerStyleTimerTimersBoxes}>

     <Timer    />
     <TimersBoxes   />
     <ParticleEffectButton
        color='#cbb9db'
        hidden={this.state.hidden}
        onComplete={this.hide}

      >
      <div className="btnStart" style={startBtnStyle} onClick={this.hide}>Start</div>
      </ParticleEffectButton>
     </div>

     <img  style={{width:"30%"}}  src={require("../containers/lotus.svg")} />
       </div>
   

        </div>
    
    )
  }
}




