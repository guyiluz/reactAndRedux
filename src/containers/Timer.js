import React, {Component} from 'react';
import CheckboxGroup from '../../node_modules/antd/lib/checkbox/Group';


class Timer extends Component {
  constructor(props){
  
    super(props)
    this.state={
   mBig:0,
   mSmall:0,
   sBig:0,
   sSmall:0,
   isMouseUp:false,
   arrowBtn:"",
   counter:0

  
   



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
  
  if(arrowBtn!==""){
    this.setState({
      mBig:Number(stringTime[0]),
      mSmall:Number(stringTime[1]),
      sBig:Number(stringTime[3]),
      sSmall:Number(stringTime[4]),
      counter:counter+=1
  
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
  
        let intervalId = setInterval(this.changeSec, 150)
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
  console.log("Up")


  clearInterval(this.state.intervalId)
  this.setState({arrowBtn:"",evType:""},()=>{
    clearInterval(this.state.intervalId)
  })

   
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
  height: "100%"

}

const timerStyle={
    color: "#454545",
    fontSize: "12rem",
    display: "flex"


}

const NumberStyles={
    alignSelf: "center"

}
const imgStyles={
    marginBottom: "-228px"


}
const imgStylesDown={
  marginTop: "-275px"



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
<div onClickCapture={this.handeClickCapture}> 
<img  id="mSmallNromlise" onClick={this.handelDown} onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp}  style={{paddingRight: "39px",transform: "rotate(180deg)",...imgStyles}} src={require('./path.svg')} />

<div>{mBig}</div>

<img  id="mSmallNromliseLess"  onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handelDown} style={{ paddingLeft: "39px"  ,...imgStylesDown}} src={require('./path.svg')} />

</div>
<div style={NumberStyles} > {mSmall}</div>
<div style={NumberStyles} > :</div>
<div onClickCapture={this.handeClickCapture}> 
<img   id ="sBigNromlise" onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handelDown} style={{paddingRight: "39px",transform: "rotate(180deg)",...imgStyles}} src={require('./path.svg')} />

<div>{sBig}</div>
<img   id ="sBigNromliseLess" onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handelDown} style={{ paddingLeft: "39px"  ,...imgStylesDown}} src={require('./path.svg')} />

</div>
<div style={NumberStyles}>{sSmall}</div>

  </div>





  </div>
          </main>
    
    )
  }
}






export default Timer





  

   
   