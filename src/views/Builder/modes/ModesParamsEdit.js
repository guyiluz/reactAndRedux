
import React from 'react'
import {  Button,Input,Checkbox   } from 'semantic-ui-react'
import {Col  } from 'reactstrap';
var _ = require('lodash');


 


  import styles from './ModesParamsEdit.css'

const ModesParamsEdit = (props) => {
let {modeParam,paramsData,paramsList}=props
let dataForRedner=[]
Object.entries(paramsList).forEach(
    ([key, val]) => {
        if(modeParam[key]==undefined){
      
    

const noneActiveDiv=  
<div className={styles.dataBox}>   <Checkbox toggle  size="mini" onChange={props.handleParamCheckBox}  name={val.paramName} label={val.displayName==null?"needToAddNma":val.displayName} />  <div><Input disabled size="mini" value={val.defaultValue}/></div> </div>


dataForRedner.push(noneActiveDiv)
        }else{
                                


    const modeParamEdit =modeParam[key]

   const ativeDiv=       <div className={styles.dataBox}>  <Checkbox   size="mini" toggle checked onChange={props.handleParamCheckBox}  name={modeParamEdit.paramName} label={val.displayName==null?"needToAddNma":val.displayName} /> <div><Input   name={val.paramName}  onChange={props.handleParamInput}   size="mini" value={modeParamEdit.paramValue}/></div> </div>
  



     
   dataForRedner.push(ativeDiv)

        }
     


    }
);

 

    return (
    <div >

<div className={styles.header}>  Mode Params  <section className={styles.nameOfMode}> {props.modeName} </section> </div>

     <Col className={styles.continer} xs="12" sm="12" lg="12">
    
    {dataForRedner}
 
    </Col>
    <div className={styles.btnDiv}>              <Button onClick={props.handleSaveingExitedParmas} >Save and close </Button>       </div>    </div>
    )
}

export default ModesParamsEdit