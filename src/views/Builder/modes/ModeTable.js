import React from 'react'
// import {Table  } from 'reactstrap';
import {
    Button,Table
   } from 'semantic-ui-react'


   import styles from './ModeTable.css'

const ModeTable = (props) => {


    const NotdeFaultPTag={
        opacity: "0.2",
        cursor: "pointer"


    }

    
    


    
    const {isLoading,list}= props.modeList
    let DataTable=[]
    if(isLoading||list.length!==0 ){
     DataTable = list.map((tr,index)=>{
    const jsonData=tr
        let deFault =""
        if(tr.IsDefault){
            deFault =<p>Default</p>
        }else{
            
            deFault=  <p style={NotdeFaultPTag}>Default</p>

        }

        return (
            <Table.Row     className= {props.modeName==tr.ModeName?styles.active: ""} key={index} >
            <Table.Cell  >{tr.ModeName} </Table.Cell>
            <Table.Cell id={tr.CoreProfileModeId} onClick={props.setProfileDefaultMode} >{deFault}</Table.Cell>
            <Table.Cell><a onClick={props.handleEdit.bind(this,jsonData)} >edit</a></Table.Cell>
            <Table.Cell><a name={tr.CoreProfileModeId} onClick={props.handelCloneMode} >Clone</a></Table.Cell>
            <Table.Cell><a name={tr.CoreProfileModeId} onClick={props.handelDeleteMode} >Delete</a></Table.Cell>

             </Table.Row>

        )


    })
    }


    return (
        <div>
      <div className={styles.header}> Profile Modes </div>
      <div >
      <Table className={styles.continer} responsive className="profile-table text-capitalize" >
              <Table.Body>
              {DataTable}
              </Table.Body>
            </Table> 
      
      </div>
        

            </div>
    )
}

export default ModeTable