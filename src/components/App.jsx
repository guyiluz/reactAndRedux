import Timer from "../containers/Timer"
import CountDown from "../containers/CountDown"
import {connect} from "react-redux";

import {SET_MODE} from "../actions/items"

import TimersBoxes from "../containers/TimersBoxes"
import React, { Component } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'

 class App extends Component {
constructor(props) {
  super(props)
 this.state={
hidden:false,

 }

}

hide=()=>{
this.setState({
hidden:true

})

}


setMode=()=>this.props.SET_MODE("med")


  render() {
const {modes}=this.props
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
        "borderRadius": "4em",
        "margin": "10px",
        "cursor": "pointer",
        "backgroundImage": "linear-gradient(to top, rgb(243, 243, 243) 0%, rgb(151, 217, 225) 100%)",
        "textAlign": "center",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "fontSize": "54px",
        "color": "#d6b1da",
        "marginTop": "29px",
        "transition":"box-shadow 0.25s ease, transform 0.25s ease"
      


    }
    return (
    
          <div className="grid-container" >

          <div className="navBar" >2 </div>


{ 
  modes=="setting" && <div  className="timer" > 
    <div className="timrNumber">
    <Timer    />
    </div>
    <div className="timerBtn">
    
     <TimersBoxes   />

     <div style={{marginTop:84}}>
     <ParticleEffectButton
        color='#cbb9db'
        hidden={this.state.hidden}
        onBegin={this.setMode}

      >
      <div className="btnStart" style={startBtnStyle}  onClick={this.hide}>Start</div>
      </ParticleEffectButton>
     </div>
  

   
</div>
</div>


}

{ 
  modes=="med" && <div className="timer" >
    <div className="timrNumber">
    <CountDown    />
    </div>
    <div className="timerBtn">
    
    <TimersBoxes   />
</div>


 

  </div>

  }
    


<div  className="picMedtion" >
<img    src={require("../containers/lotus.svg")} />

</div >
</div >

   

    
    )
  }
}



const mapStateToProps = (state) => {
  return {
    modes:state.modes

  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    SET_MODE:(strig)=>dispatch(SET_MODE(strig))

  };
};








export default connect(mapStateToProps, mapDispatchToProps)(App);



