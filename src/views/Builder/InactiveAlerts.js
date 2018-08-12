import React from 'react';
import styles from './InactiveAlerts.css'

import { Icon,Tab } from 'semantic-ui-react'

const InactiveAlerts = props => {

    const alerts=[...props.list]
    .map((item,index)=>{
      

        

return(
 <div   onClick={props.handleAlertClick.bind(this,item)} className={styles.box}>




<Icon    className={styles.icon}  name={props.alertsActiveObj[item.alertType]==undefined?"square outline":"square"}   color="blue"  /><div className={styles.text}>  {props.alertsObj[index].displayName}</div>
 </div>

)

    })
    return (
        <div   onMouseLeave ={props.handelMousetOut}>
<div className={styles.header}> Inactive Triggers </div>

<div  className={styles.continer}>
{alerts}


</div>


        </div>
    );
};



export default InactiveAlerts;