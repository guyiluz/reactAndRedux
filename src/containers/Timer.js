import React, {Component} from 'react';
import CheckboxGroup from '../../node_modules/antd/lib/checkbox/Group';
import {connect} from "react-redux";
import {SET_TIMER} from "../actions/items"


class Timer extends Component {
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
   timerName:timerName

  
   



    }
  }

  static getDerivedStateFromProps(nextProps,prevState){
    console.log("nextProps:",nextProps)
    console.log("prevState:",prevState)
 if(prevState.timerName!==nextProps.timerName&&prevState.timerName!==undefined){

  const timerName =nextProps.timerName
    const time= nextProps.timers[timerName]

return{

   
   mBig:parseInt(time[0]) ,
   mSmall:parseInt(time[1]),
   sBig:parseInt(time[3]),
   sSmall:parseInt(time[4]),
   isMouseUp:false,
   arrowBtn:"",
   counter:0,
   totalTime:0,
   timerName



}


 }else{

return null

 }


   }



   changeSec= ()=>{

    


    let {mBig,mSmall,sBig,sSmall,counter}=this.state
    let  mBigNromlise=mBig!==0?mBig*10*60*1000:0
    let  mSmallNromlise=mSmall!==0?mSmall*60*1000:0
    let sBigNromlise=sBig!==0?sBig*10*1000:0
    let sSmallNromlise=sSmall!==0?sSmall*1000:0;
let   arrowBtn =this.state.arrowBtn
    switch (arrowBtn) {
      case "sBigNromlise":
      sBigNromlise+=1000*10
        break;
    
        case "mSmallNromlise":
        mSmallNromlise+=60*1000
          break;
          case "sBigNromliseLess":

          if(mBig+mSmall+sBig+sSmall!==0){
            sBigNromlise-=1000*10
          }
          break;
          case "mSmallNromliseLess":

          if(mBig+mSmall+sBig+sSmall!==0){
            mSmallNromlise-=60*1000
          }
     
     
            break;


      default:
        break;
    }





   let  millis=  mBigNromlise+mSmallNromlise+sBigNromlise+sSmallNromlise
   var minutes = Math.floor(millis / 60000);
   var seconds = ((millis % 60000) / 1000).toFixed(0);
  let stringTime=  minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  if(stringTime.length<5){
  stringTime = "0"+stringTime

  }
  
  const obj = this.props.timers
  obj[this.props.timerName]=stringTime
  this.props.SET_TIMER(obj)
    
console.log(stringTime);

  if(arrowBtn!==""){
    this.setState({
      mBig:Number(stringTime[0]),
      mSmall:Number(stringTime[1]),
      sBig:Number(stringTime[3]),
      sSmall:Number(stringTime[4]),
      counter:counter+=1,
      totalTime:stringTime
  
    }) 
  }
  

 
}






  HandleStartTimer=()=>{

    let millis=0

    const millisToMinutesAndSeconds=( )=> {
      if(millis!==0){  
      millis=millis-1000
      setTimeout(()=>{
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
       let stringTime=  minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
 if(stringTime.length<5){
  stringTime = "0"+stringTime

 }



       this.setState({
        mBig:Number(stringTime[0]),
        mSmall:Number(stringTime[1]),
        sBig:Number(stringTime[3]),
        sSmall:Number(stringTime[4])
  



      })
  
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
console.log('millis :', millis);

  }
  



  
handleClick=(e)=>{



 }
  
  handelDown=(e)=>{
 
 

     if(e.type=="mousedown"){
       
     console.log("down");
      this.setState({
        arrowBtn:e.target.id,
        stop:true
     
      } ,()=> {
        const intervalTIme =this.state.intervalTIme
  
        let intervalId = setInterval(this.changeSec, 200)
        this.setState({ intervalId: intervalId,evType:"mousedown"})
    
  
   
      })
   }
   
   else  {
    console.log(e.type)
    this.setState({
      arrowBtn:e.target.id,
    evType:""
    } ,()=>this.changeSec()
   )





  
  }


    
   }
  

handelUp=()=>{

  clearInterval(this.state.intervalId)
  this.setState({arrowBtn:"",evType:""},()=>{
    clearInterval(this.state.intervalId)
  })

  console.log("Up")

}

handeClickCapture=(e)=>{
  const {counter}=this.state
  console.log("handeClickCapture");
  if(counter>1){
e.stopPropagation()
this.setState({counter:0})

  }else{
    this.setState({counter:0})
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
    color: "#454545",
    fontSize: "12rem",
    display: "flex",
    


}

const NumberStyles={
    alignSelf: "center",
    "lineHeight":"0.5",
    

}
const imgStyles={



}
const imgStylesDown={




}


const numberDivStyle ={

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",




}



    return (
 


  
<div

 >








{/*   
<button onClick={this.HandleStartTimer}>CLick</button>
<button  onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handleClick}>up</button> */}





 
 <div style={timerStyle}>
<div style={numberDivStyle} onClickCapture={this.handeClickCapture}> 
<img  id="mSmallNromlise" onClick={this.handelDown} onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp}  style={{paddingLeft: "70px",...imgStyles}} src={require('./path.svg')} />

<div style={NumberStyles}  >{mBig}</div>

<img  id="mSmallNromliseLess"  onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handelDown} style={{ paddingRight: "70px",transform: "rotate(180deg)",  ...imgStylesDown}} src={require('./path.svg')} />

</div>
<div style={NumberStyles} > {mSmall}</div>
<div style={NumberStyles} > :</div>
<div  style={numberDivStyle}  onClickCapture={this.handeClickCapture}> 
<img   id ="sBigNromlise" onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handelDown} style={{paddingLeft: "70px",...imgStyles}} src={require('./path.svg')} />

<div style={NumberStyles} >{sBig}</div>
<img    id ="sBigNromliseLess" onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handelDown} style={{ paddingRight: "70px"  ,transform: "rotate(180deg)", ...imgStylesDown}} src={require('./path.svg')} />

</div>
<p style={NumberStyles}>{sSmall}</p>

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


export default connect(mapStateToProps, mapDispatchToProps)(Timer);








  

   
   