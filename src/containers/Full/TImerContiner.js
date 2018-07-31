import React, {Component} from 'react';
import { Button } from '../../../node_modules/antd';


class TImerContiner extends Component {
  constructor(props){
  
    super(props)
    this.state={
   mBig:0,
   mSmall:0,
   sBig:0,
   sSmall:0,
   mouseEtner:false


    }
  }


  up=()=>{
    this.setState({mouseEtner:true})

    const add=()=>{

      setTimeout(()=>{     
        
 
    
    let {mBig,mSmall,sBig,sSmall}=this.state
  let  mBigNromlise=mBig!==0?mBig*10*60*1000:0
  let  mSmallNromlise=mSmall!==0?mSmall*60*1000:0
  let sBigNromlise=sBig!==0?sBig*10*1000:0
  let sSmallNromlise=sSmall!==0?sSmall*1000:0;
  sSmallNromlise+=1000
 let  millis=  mBigNromlise+mSmallNromlise+sBigNromlise+sSmallNromlise
 var minutes = Math.floor(millis / 60000);
 var seconds = ((millis % 60000) / 1000).toFixed(0);
let stringTime=  minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
if(stringTime.length<5){
stringTime = "0"+stringTime
console.log('stringTime :', stringTime);

}




this.setState({
  mBig:Number(stringTime[0]),
  mSmall:Number(stringTime[1]),
  sBig:Number(stringTime[3]),
  sSmall:Number(stringTime[4])




})

if(this.state.mouseEtner){
  add()

}



// end of add 
},50)
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
console.log('stringTime :', stringTime);
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


  componentDidMount(){
 
    
  }



  render() {
  
    const {mBig,mSmall,sBig,sSmall}=this.state

     



const testStyle={
  fontSize: "9rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"

}


    return (
 


          <main  style={testStyle} className="main">
  
<button onClick={this.HandleStartTimer}>CLick</button>
<button onClick={this.up}>up</button>
  {mBig}{mSmall}:{sBig}{sSmall}
          </main>
    
    )
  }
}






export default TImerContiner


