import React, { Component } from 'react';
import CheckboxGroup from '../../node_modules/antd/lib/checkbox/Group';
import { connect } from "react-redux";
import { SET_TIMER } from "../actions/items";
var audio = new Audio(require('./Meditation-bell-sound.mp3'));



class CountDown extends Component {
  constructor(props) {

    super(props)
    const timerName = this.props.timerName
    const time = this.props.timers[timerName]
    this.state = {
      mBig: parseInt(time[0]),
      mSmall: parseInt(time[1]),
      sBig: parseInt(time[3]),
      sSmall: parseInt(time[4]),
      isMouseUp: false,
      arrowBtn: "",
      counter: 0,
      totalTime: 0,
      timerName: "",
      status: "",
      intervalNum: "",
      intervalId: ""







    }
  }

  stringToNumber = (string) => string.split("").filter(i => isNaN(i) == false).map(i => Number(i))

  getMilisecFromString = (numString) => {
   const stringToNumbersArry = this.stringToNumber(numString)
    const MiliscCounterObj = {
      "0": (num) => num !== 0 ? num * 10 * 60 * 1000 : 0,
      "1": (num) => num !== 0 ? num * 60 * 1000 : 0,
      "2": (num) => num !== 0 ? num  * 10 * 1000 : 0,
      "3": (num) => num !== 0 ? num * 1000 : 0,

    }



    return stringToNumbersArry.reduce((accumulator, currentValue, currentIndex) => accumulator + MiliscCounterObj[currentIndex](currentValue))

  }


  bellRing=()=>{
    audio.pause()
    
    audio.play();

  }







  HandleStartTimer = () => {

    const { timers } = this.props
    const { status, totalTime } = this.state
    const { medation, interval } = timers
    const   intervvalTime = this.getMilisecFromString(interval)
    const medationTime = this.getMilisecFromString(medation)

   let counter =0


    this.millis = 0


    const millisToMinutesAndSeconds = () => {
      const { status, totalTime } = this.state
      const { medation, interval } = timers

      if(status=="medation"){

     console.log('intervvalTime :', intervvalTime);
     console.log('counter :', counter);
if(intervvalTime!==counter){
  counter =counter+1000


}else{
  console.log("object");
  counter=0
  this.bellRing()

  

}

}
      if (this.millis !== 0) {
        this.millis = this.millis - 1000
        setTimeout(() => {
          var minutes = Math.floor(this.millis / 60000);
          var seconds = ((this.millis % 60000) / 1000).toFixed(0);
          let stringTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
          let totalTime = minutes + seconds
          if (stringTime.length < 5) {
            stringTime = "0" + stringTime

          }

          console.log(this.millis)

          this.setState({
            mBig: Number(stringTime[0]),
            mSmall: Number(stringTime[1]),
            sBig: Number(stringTime[3]),
            sSmall: Number(stringTime[4]),
            totalTime




          })


          if (totalTime == "01" && this.state.status === "Get Ready" && this.state.status !== "medation") {
       this.bellRing()

            if (timers.interval == "00:00") {
              const { medation, interval } = timers
              this.millis = this.getMilisecFromString(medation)

              this.setState({
                status: "medation"
              })


            } else {
      
              this.setState({
                status: "medation"
              })
              this.millis = medationTime




            }
          }

          millisToMinutesAndSeconds(this.millis)





        }, 1000)
      }

    }


    let { mBig, mSmall, sBig, sSmall } = this.state
    let mBigNromlise = mBig !== 0 ? mBig * 10 * 60 * 1000 : 0
    let mSmallNromlise = mSmall !== 0 ? mSmall * 60 * 1000 : 0
    let sBigNromlise = sBig !== 0 ? sBig * 10 * 1000 : 0
    let sSmallNromlise = sSmall !== 0 ? sSmall * 1000 : 0

    this.millis = mBigNromlise + mSmallNromlise + sBigNromlise + sSmallNromlise
    millisToMinutesAndSeconds(this.millis)

  }



  componentWillUnmount() {
    clearInterval(this.timer)


  }

  componentDidMount() {
    const { timers } = this.props
    if (timers.prepare !== "00:00") {
      this.setState({
        mBig: parseInt(timers.prepare[0]),
        mSmall: parseInt(timers.prepare[1]),
        sBig: parseInt(timers.prepare[3]),
        sSmall: parseInt(timers.prepare[4]),
        status: "Get Ready",
        totalTime: timers.prepare


      }, () => {

        this.HandleStartTimer()

      }


      )


    }





  }



















  render() {

    const { mBig, mSmall, sBig, sSmall } = this.state






    const testStyle = {
      fontSize: "9rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",


    }

    const timerStyle = {
      color: "rgb(182, 198, 222)",
      fontSize: "12rem",
      display: "flex",



    }

    const NumberStyles = {
      alignSelf: "center",
      "lineHeight": "0.5",
    }





    const numberDivStyle = {

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",




    }



    return (




      <div className="CountDown">



        <div style={timerStyle}>
          <div style={numberDivStyle} >

            <div style={NumberStyles}  >{mBig}</div>


          </div>
          <div style={NumberStyles} > {mSmall}</div>
          <div style={NumberStyles} > :</div>
          <div style={numberDivStyle}  >

            <div style={NumberStyles} >{sBig}</div>

          </div>
          <p style={NumberStyles}>{sSmall}</p>

        </div>

        <div>
          {/* <p>{this.state.status}1111111111111111</p>
<p>{this.state.intervalNum}222222222222222</p> */}

        </div>



      </div>


    )
  }
}



const mapStateToProps = (state) => {
  return {
    timers: state.timers,
    timerName: state.timerName,
    modes: state.modes



  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    SET_TIMER: (obj) => dispatch(SET_TIMER(obj))


  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CountDown);











