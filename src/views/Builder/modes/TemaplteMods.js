
import React from 'react'
import {  Button,Input,Checkbox   } from 'semantic-ui-react'
import {Col  } from 'reactstrap';
import { Icon,Tab } from 'semantic-ui-react'

import styles from './TemaplteMods.css'



const TemaplteMods = (props) => {
  const modes=[...props.profileModesTemplate]
  .map((item,index)=>{
    

const o=item

return(
<div     id={item.CoreProfileModeId} onClick={props.handleCloneFromTemp.bind(this,o)}  className={styles.box} >

<Icon    className={styles.icon}  name="code"    /><div className={styles.text}>  {item.ModeName}</div>
</div>

)


  })
console.log(modes)
    return (
    <div >
 <div className={styles.header}> Template Modes </div>

<div  className={styles.continer}>
{modes}


</div>   
    </div>

 

    )
}

export default TemaplteMods