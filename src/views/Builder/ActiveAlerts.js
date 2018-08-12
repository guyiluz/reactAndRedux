import React from 'react';
import styles from './ActiveAlerts.css'
import { Table,Checkbox,Input,Icon,Dropdown, Select } from 'semantic-ui-react'
var _ = require('lodash');
const ActiveAlerts = (props) => {

    let options=props.modeList.list.map((item)=>{
        return {
            text:item.ModeName,
            value:item.CoreProfileModeId
    
        }
    
    
        })
            
        
        options.push({
            text:"None",
            value:null
    
        }
    )
        


        
  let list = _.sortBy(props.list, [function(o) { return o.actualName; }]);

     
      
    const dataTable =list.length==0?"":[...list]
    .map((item,index)=>{
        
        const select=<Select name={item.alertType} onChange={props.handleModeSelect}  options={options} placeholder='None'  floating value={item.coreProfileModeId}
         ></Select>



           





    return(

    
        <Table.Row className="animated fadeIn" key={index}>
        <Table.Cell>
        <Icon  name="check square" color="blue" /> {item.actualName} 
        </Table.Cell>
        <Table.Cell> 
        <Input id={item.alertType}  onBlur={props.handleDisplayName}  placeholder={item.displayName}   />
    </Table.Cell>
        <Table.Cell>{select}</Table.Cell>
      </Table.Row>
  
    )


    })
    return (
        <div>

            <div className={styles.header}> Active Alerts   </div>
            <div>

                
            </div>
            <div className={styles.continer}>

<Table>


    <Table.Body >
{dataTable}
    </Table.Body>

</Table>
</div>

           </div> 
      
    );
};


export default ActiveAlerts;