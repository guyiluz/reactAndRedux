import React, {Component} from 'react';
import CheckboxGroup from '../../node_modules/antd/lib/checkbox/Group';
import {connect} from "react-redux";
import {SET_TIMER} from "../actions/items";
var audio = new Audio(require('./Meditation-bell-sound.mp3') );



class CountDown extends Component {
  constructor(props){
  
    super(props)
    const timerName =this.props.timerName
    const time= this.props.timers[timerName]
    this.state={
   mBig:parseInt(time[0]) ,
   mSmall:parseInt(time[1]),
   sBig:parseInt(time[3]),
   sSmall:parseInt(time[4]),
   isMouseUp:false,
   arrowBtn:"",
   counter:0,
   totalTime:0,
   timerName:"",
   status:"",
   intervalNum:"",
   intervalId:""


  
   



    }
  }



  getMilisecFromString =(timeObj)=>{

    let intervalObj ={
      mBig:Number(timeObj[0]),
      mSmall:Number(timeObj[1]),
      sBig:Number(timeObj[3]),
      sSmall:Number(timeObj[4]),
    }




   let millis =0
    let {mBig,mSmall,sBig,sSmall}=intervalObj
    let  mBigNromlise=mBig!==0?mBig*10*60*1000:0
    let  mSmallNromlise=mSmall!==0?mSmall*60*1000:0
    let sBigNromlise=sBig!==0?sBig*10*1000:0
    let sSmallNromlise=sSmall!==0?sSmall*1000:0
    millis=  mBigNromlise+mSmallNromlise+sBigNromlise+sSmallNromlise

 return millis
  }


  HandleStartTimer=()=>{

    let intervvalTime;
    const {timers}= this.props
  const {status,totalTime}=this.state

  let interval=timers.interval;
  let intervalNum=0;



    let millis=0

    const millisToMinutesAndSeconds=( )=> {
      console.log("millis:",millis);

      if(millis!==0){  
      millis=millis-1000
      setTimeout(()=>{
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
       let stringTime=  minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
       let totalTime =minutes+seconds
 if(stringTime.length<5){
  stringTime = "0"+stringTime

 }


       this.setState({
        mBig:Number(stringTime[0]),
        mSmall:Number(stringTime[1]),
        sBig:Number(stringTime[3]),
        sSmall:Number(stringTime[4]),
        totalTime
  



      })
       if(totalTime=="01"&&this.state.status==="Get Ready"&&this.state.status!=="medation"){
        audio.pause()

        audio.play();
        if(timers.interval=="00:00"){
          const {medation,interval} =timers
                  millis=  this.getMilisecFromString(medation)
          
                  this.setState({
                    status:"medation"
                   })


        }else {
          const {medation,interval} =timers
   intervvalTime = this.getMilisecFromString(interval)
  let medationTime= this.getMilisecFromString(medation)
console.log(" this.getMilisecFromString(interval)", this.getMilisecFromString(interval))
console.log(" this.getMilisecFromString(medation)", this.getMilisecFromString(medation))

this.setState({
  status:"medation"
 })
millis =medationTime

if(intervvalTime>0){
  intervalNum = Math.round(medationTime/intervvalTime)
  this.setState({intervalNum,intervalId:setInterval(()=>{
    audio.pause()

    audio.play();


 console.log("ITERVAL ON ")
  },intervvalTime)

})
}

        }
        }
  
      millisToMinutesAndSeconds(millis) 




  
     },1000)
    }

    }


    let {mBig,mSmall,sBig,sSmall}=this.state
  let  mBigNromlise=mBig!==0?mBig*10*60*1000:0
  let  mSmallNromlise=mSmall!==0?mSmall*60*1000:0
  let sBigNromlise=sBig!==0?sBig*10*1000:0
  let sSmallNromlise=sSmall!==0?sSmall*1000:0

  millis=  mBigNromlise+mSmallNromlise+sBigNromlise+sSmallNromlise
  millisToMinutesAndSeconds(millis)

  }
  


componentWillUnmount(){

clearInterval(this.state.intervalId)


}

  componentDidMount(){
 const {timers}= this.props
if(timers.prepare!=="00:00"){
 this.setState({
  mBig:parseInt(timers.prepare[0]) ,
  mSmall:parseInt(timers.prepare[1]),
  sBig:parseInt(timers.prepare[3]),
  sSmall:parseInt(timers.prepare[4]),
  status:"Get Ready",
  totalTime:timers.prepare


 },()=>{

this.HandleStartTimer()

 }
 
 
 )


}
     




  }

 








 








  render() {
  
    const {mBig,mSmall,sBig,sSmall}=this.state

     




const testStyle={
  fontSize: "9rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",


}

const timerStyle={
    color: "rgb(182, 198, 222)",
    fontSize: "12rem",
    display: "flex",
    


}

const NumberStyles={
    alignSelf: "center",
    "lineHeight":"0.5",
}





const numberDivStyle ={

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",




}



    return (
 


  
<div>


 
 <div style={timerStyle}>
<div style={numberDivStyle} > 

<div style={NumberStyles}  >{mBig}</div>


</div>
<div style={NumberStyles} > {mSmall}</div>
<div style={NumberStyles} > :</div>
<div  style={numberDivStyle}  > 

<div style={NumberStyles} >{sBig}</div>

</div>
<p style={NumberStyles}>{sSmall}</p>

  </div>

<div>
<p>{this.state.status}</p>
<p>{this.state.intervalNum}</p>

</div>



  </div>
       
    
    )
  }
}



const mapStateToProps = (state) => {
  return {
    timers:state.timers,
    timerName:state.timerName      


  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    SET_TIMER:(obj)=>dispatch(SET_TIMER(obj))
    

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CountDown);








  

   
   