import React from 'react'
import {Table  } from 'reactstrap';
import { Dropdown,Button,Input } from 'semantic-ui-react'
import {BrowserRouter as Router ,Link, Route} from 'react-router-dom'
import {CSVLink, CSVDownload} from 'react-csv';



 

const Device_table = (props) => {

  // Handel select box option change and triger the modal on (open)

const handleChange = (e, { value,name,options,id }) => {
  const text= options.filter((num=> value==num.value)),
  userId=name
 
  if(id==value){

    return false
  }
  props.getProfileSelected({
  coreProfileId:value,
  userId,
  text:text["0"].text

})

props.getModalShowHide(true)

}

const handleInputChange=(e)=>{
 props.getActivateDevice(e.target.value)

}

const  modalContent =<div>
    
    <Input  onChange={handleInputChange}  value={props.activateDevice}  icon='users' iconPosition='left' placeholder='ICCID' />

        </div>

// cusntom modal

const modalObj ={dimmer:false,closeOnDocumentClick:true}
// option for the select box
const options =[]

let tmep = props.profilesListAll.map((profile)=>{

   options.push({ text:profile.Name,value: profile.CoreProfileId })})


// trs from data

let devieListTrs = [].concat(props.deviceList);


        devieListTrs = devieListTrs.map((tr,index)=>{
        let profile ="",
        isOn="Off"
        if(tr.profile==null){
          profile=1508

        }else{
          profile = tr.profile.coreProfileId
        }

        if(tr.isOn==true){
          isOn = "On"

        }


    

        return (

      
            <tr key={index} >
            <td>{tr.deviceICCID} </td>
            <td>{tr.deviceId} </td>
            <td>{tr.battery} % </td>
            <td> {tr.deviceBleName} </td>
            <td>{isOn}</td>
            <td>{tr.deviceDisplayName} </td>
            <td>{tr.modeName} </td>
          



            <td><Dropdown onChange={handleChange}   id={profile} name={tr.deviceId} value={profile}  options={options} defaultValue={profile}/> </td>
            <td><Link to={{ pathname:`http://testws.hereo.co.uk/logs/${tr.deviceId}.txt`}}>Show Data</Link></td>

             </tr> 
        )

      


      })
   
    return (
     <div> <CSVLink data={props.deviceList} >Download CSV</CSVLink>
        <Table responsive className="profile-table text-capitalize" >
  <thead>
  <tr>
    <th>ICCID</th>
    <th>Device Id</th>
    <th>Battery</th>
    <th>Ble Name</th>
    <th>On/Off</th>
    <th>Display Name</th>
    <th>Current mode</th>




    <th>Core Profile</th>
    <th>Action</th>

  </tr>
  </thead>
  <tbody>
  {devieListTrs}
  </tbody>
</Table> 
</div>

    )
}

export default Device_table