import React, { Component } from 'react'
import {connect} from "react-redux";
import {getProfileModes,setAlertsData,SetDataFinal,getAlertList,saveAlertToSer
} from "../../actions/items";
import {Table  } from 'reactstrap';
import { Checkbox,Dropdown,Input,Button } from 'semantic-ui-react'
class Alerts extends Component {



    

componentDidMount () {

    const id=  this.props.location.search.replace("?","")
this.props.getAlertList(id)
setTimeout(() => {
    this.props.getProfileModes(id)
}, 500);


}




 onCheckBoxChange =(e,val)=>{
let obj={}
if(val.type=="text"){
   obj ={
        alertType:parseInt(e.target.id),
         coreProfileModeId:val.name,
        displayName:val.value, 
        check: e.target.checked

}

}
else if(val.type=="checkbox"){

    obj ={
        alertType:parseInt(val.alertType),    
         coreProfileModeId:val["dataCordeID"],
        displayName:val.name,
        check: val.checked


}


}else{
    
    obj ={
        alertType:parseInt(val.id),  
         coreProfileModeId: val.value,
        displayName:val.name,
        check: !val.checked


}

}

    this.props.setAlertsData(obj)

         }
                

saveAlerts =()=>{
    const id=  this.props.location.search.replace("?","")
this.props.saveAlertToSer(id)

         }

  
     



render(){
    

    var bnt =<Button onClick={this.saveAlerts} >Save </Button>


    const {alertList,modeList} =this.props
    if(modeList.isLoading){

        const modes=[]

        modeList.list.map((itme)=>  modes.push(  { text:itme.ModeName, value: itme.CoreProfileModeId  }      )   )
        modes.push({text:"none",value:null})


   const DataTable=alertList.map((tr,index)=>{
  
  const nameArry = [this.props.rowAlertList]
 
  
  let actualName  = nameArry[0].filter(name=> name.alertType==tr.alertType)
  actualName= actualName[0].displayName

  return (
<tr key={index}>
<td> <Checkbox onChange={this.onCheckBoxChange}  dataCordeID={tr.coreProfileModeId} checked={tr.check} label={actualName} name={tr.displayName} alertType ={tr.alertType} />  </td>
<td> <Input onChange={this.onCheckBoxChange} checked={tr.check}  id={tr.alertType} placeholder={tr.displayName} name={tr.coreProfileModeId}  disabled={!tr.check}/> </td>
<td><Dropdown onChange={this.onCheckBoxChange}  value={tr.coreProfileModeId} id={tr.alertType} name={tr.displayName}   disabled={!tr.check} placeholder='None' selection options={modes} /></td>

</tr>


  )


   })
        return (
            <div>
                     {bnt}
               <Table responsive className="profile-table text-capitalize" >
                <thead>
                <tr>
                  <th>On/Off</th>
                  <th>Display Name</th>
                  <th>Mode</th>
                </tr>
                </thead>
                <tbody>
                {DataTable}
                </tbody>
              </Table>  
            </div>
        )

    }



    return (
        <div>
             {bnt}
        </div>
    )
  
}saveAlertToSer



}

const mapStateToProps = (state) => {
    return {
        modeList:state.modeList,
        alertList:state.alertList,
        rowAlertList:state.rowAlertList.alertTypes
    
        
        };

};




const mapDispatchToProps = (dispatch) => {
    return {

        getProfileModes: (coreProfileId) => dispatch(getProfileModes(coreProfileId)),
        setAlertsData:(obj)=> dispatch(setAlertsData(obj)),
        getAlertList:(int)=> dispatch(getAlertList(int)),
     saveAlertToSer:(id)=>dispatch(saveAlertToSer(id)) 

        


   


        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);




