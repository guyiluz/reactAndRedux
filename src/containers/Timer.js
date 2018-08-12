import React, {Component} from 'react';


class Timer extends Component {
  constructor(props){
  
    super(props)
    this.state={
   mBig:0,
   mSmall:0,
   sBig:0,
   sSmall:0,
   isMouseUp:false

   


    }
  }


   changeSec= ()=>{

  
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

  }
  
  
  this.setState({
    mBig:Number(stringTime[0]),
    mSmall:Number(stringTime[1]),
    sBig:Number(stringTime[3]),
    sSmall:Number(stringTime[4]),

  }) 
 
}


handleClick=()=>{

    this.changeSec()
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
  
  handelDown=()=>{

    const intervalTIme =this.state.intervalTIme

    let intervalId = setInterval(this.changeSec, 200)
    this.setState({ intervalId: intervalId })

}
handelUp=()=>{
    clearInterval(this.state.intervalId)
   
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

const timerStyle={
    color: "#454545",
    fontSize: "12rem",
    display: "flex"


}

const NumberStyles={
    alignSelf: "flex-end"

}
const imgStyles={
    marginBottom: "-228px"


}


    return (
 


          <main  style={testStyle} className="main">
  
<div style={{
    display: "flex",
    flexDirection: "column"

}} >








{/*   
<button onClick={this.HandleStartTimer}>CLick</button>
<button  onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handleClick}>up</button> */}





 
 <div style={timerStyle}>
<div> 
<img style={{    transform: "rotate(180deg)",...imgStyles}} src={require('./path.svg')} />

<div>{mBig}</div>
</div>
<div style={NumberStyles} > {mSmall}</div>
<div style={NumberStyles} > :</div>

<div> 
<img  onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handleClick} style={{    transform: "rotate(180deg)",...imgStyles}} src={require('./path.svg')} />

<div>{sBig}</div>
</div>
<div style={NumberStyles}>{sSmall}</div>

  </div>





  </div>
          </main>
    
    )
  }
}






export default Timer





  

   
   