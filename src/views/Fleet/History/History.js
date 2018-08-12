import React, { Component } from 'react'
import { Select,Button,Icon } from 'semantic-ui-react'
var DateTime = require('react-datetime');
const moment =require('moment')
import {connect} from "react-redux";
import {getDeviceHistory,checkObj,playOrPuseFlyBy} from "../../../actions/items"
import {runIt} from '../../../containers/Fleet/fleetUtil'

import {setFleetmapState,chageFleetMode} from "../../../actions/fleet_action"
import FleetHistoryConroller from "./FleetHistoryConroller"
import { Dropdown } from 'semantic-ui-react'
import FleetHistoryTimeLineSidler  from "./FleetHistoryTimeLineSidler"

 class History extends Component {

constructor(props){
super(props)

this.state={

    toDate:"",
    fromDate:"", 
    historyDevice:"",
    flyByNumber:0,
    speed:300,
    btn:"play",
    stop:false



}


}


componentWillReceiveProps(nextState){
console.log(this.state.flyByNumber);
console.log(nextState.flyByNumber);



}



componentDidMount(){

    if(this.props.deviceHistoryData[0]!==undefined){
    this.props.chageFleetMode("history")
    
    }

}
handleDeviceHistory=(e,val)=>{
    const historyDevice= val.value
   this.setState({historyDevice})
}


onFromDate=(date)=>{
    let fromDate= moment(date._d).unix()
this.setState({
  fromDate

})
}


onToDate=(date)=>{

    let toDate= moment(date._d).unix()
    
   this.setState({
    toDate
  
  })
     }


     getDeviceHistory=()=>{

        this.setState({flyByNumber:1})

            let {historyDevice,fromDate,toDate}=this.state
            this.props.getDeviceHistory(historyDevice,fromDate,toDate)
            

     }

     handleSelectBoxHistory=(marker)=>{
        let historyLineSelect = [...this.props.historyMapState.historyLineSelect]
        historyLineSelect.push(marker.testIfSelected)
        const obj={historyLineSelect,isBounse:false}
             this.props.setFleetmapState(obj)
           }




           getFlyByData = (e) => {


            const btn = e.target.id
  let counter =0
            const flyByDataObj = this.props.deviceHistoryData
             let flyByNumber = this.state.flyByNumber
        
             const that = this

function  playFlyBy() {
                  
               

                     setTimeout(() => {
                         
                         if(flyByDataObj.length==flyByNumber+2||that.state.stop==true){
                            return false

                         }else{
                            that.props.checkObj(flyByDataObj[flyByNumber], flyByNumber==0)
                
                            flyByNumber =flyByNumber+1
                            playFlyBy()

                            
                         }
               
                         that.setState({
                         
                        flyByNumber:flyByNumber

                       })
                    
                  },that.state.speed );
    
               }
            


         


    
              this.setState({btn:"pause",
              stop:false
            })
               this.props.playOrPuseFlyBy(true)
               playFlyBy()

              
            


                   
  
            
        }

    


        HandleSpeendSliderBae=num=>this.setState({
       speed:num
    

        })



        HandlerTimeLineChage=(flybyVal)=>{
      this.setState({
   flyByNumber:flybyVal
      })
      const flyByDataObj = this.props.deviceHistoryData
      this.props.playOrPuseFlyBy(true)
      this.props.checkObj(flyByDataObj[flybyVal], flybyVal==0)

        }
      
        

       
    
        
HandleStop=()=>this.setState({stop:true,   btn:"play"})


  render() {

    const {isFlyBy}=  this.state
    const SelectStyle={
        marginBottom:5
        },
    
        StyleDate={
            marginBottom:2
        },
        StyleButton={
            marginTop:5
        },
        StyleList={
    
            cursor:"pointer",
            border: "solid 1px #002c8b30",
            padding: 2,
            borderRadius: 15,
            background: "#cacadc54",
            marginBottom: 2
        },
        StyleDivLIst={
            height: 468,
            overflowY: "scroll",
            opacity: 0.95,
            width: "80%",
            textAlign: "center",
            marginTop: 15,
            padding: 5,
    
        }
    

 


        const options = [...this.props.list]
        .map((item)=>{
        let obj={
          text:item.deviceDisplayName,
          value:item.deviceId
    
        }
    
        return obj
        })
    
        let data =""
    
        if(this.props.deviceHistoryData[0]!==undefined){
    


       
     let btns= []
     this.props.deviceHistoryData
    .map((item,index)=>{
    
    
    
    
    
            btns.push(<p  className="historyLine"  style={{width:"100%",marginBottom:3}}  onClick={this.handleSelectBoxHistory}> {moment.unix(item.SampleDate).format("MM/DD   HH:mm:ss")}</p>)
    
           
    
    
        
    
    })
    
    data=   <div style={{height:200,width:"100%"}} className="timeStampList">{btns} </div>
    
        }else{
            if(this.props.deviceHistoryLoggger!==true){
                data ="no Data"  
            }
    
      
        }
    
        
    
       
            
    
        let historyData=[]
        if(historyData[0]!==undefined){
            historyData=2
    
        }
    
    
    
            
    
    
    
            const disable =((this.state.historyDevice=="")+(this.state.toDate=="")+(this.state.fromDate==""))!==0
    




    return (
      <div>
           <div className="historyContiner">
        <div  style={SelectStyle}>
        <Select fluid onChange={this.handleDeviceHistory} value={this.state.historyDevice} search placeholder='Select  device' options={options} />

        </div>
        <div  >
        <div style={StyleDate}  >
         <DateTime onChange={this.onFromDate}    inputProps={{ placeholder: 'From date'}}/>
         </div>
 <DateTime  onChange={this.onToDate}   inputProps={{ placeholder: 'To date'}}/>
       
        </div>
<div>
    <Button fluid onClick={this.getDeviceHistory} disabled={disable} style={StyleButton} >Show History</Button>
</div>
{this.props.deviceHistoryLoggger&& <Icon style={{marginTop:100 ,marginLeft: '33%'}}  size="huge" loading name='spinner' />

}
{ this.props.logger  && < FleetHistoryConroller  HandleStop={this.HandleStop} btnState={this.state.btn}  HandleSpeendSliderBae={this.HandleSpeendSliderBae}   isFlyBy={this.props.isFlyBy} getFlyByData={this.getFlyByData} />
}

{   (this.props.logger &&this.props.deviceHistoryData.length!==0)  && <FleetHistoryTimeLineSidler HandlerTimeLineChage={this.HandlerTimeLineChage}    data={this.props.deviceHistoryData} silderLRageMax={this.props.deviceHistoryData.length}   currentValue={this.state.flyByNumber} /> }


{data}

        </div>
      </div>
    )
  }
}
















const mapStateToProps = (state) => {
    return {
    
        deviceHistoryData:state.deviceData.data,
        deviceHistoryLoggger:state.deviceHistoryLoggger,
        historyMapState:state.historyMapState,
        isFlyBy:state.isFlyBy,
        logger:state.deviceData.isLoading,
        fleetLflyObj:state.fleetLflyObj



        


    };
};


                        const mapDispatchToProps = (dispatch) => {
                            return {
                                getDeviceHistory:(userId,fromDate,toDate)=>dispatch(getDeviceHistory(userId,fromDate,toDate)),
                                setFleetmapState:(obj)=>dispatch(setFleetmapState(obj)),
                                chageFleetMode:(string)=>dispatch(chageFleetMode(string)),
                                checkObj: (obj, firsOnArray) => dispatch(checkObj(obj, firsOnArray)),
                                playOrPuseFlyBy:(boolean)=>dispatch(playOrPuseFlyBy(boolean))


                           
                            
                            };
                        };

                        export default connect(mapStateToProps,mapDispatchToProps)(History);














