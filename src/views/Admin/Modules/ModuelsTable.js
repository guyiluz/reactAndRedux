import React from 'react';
import { Table } from 'semantic-ui-react'
import { Button,Input,Form,TextArea,Select,Icon,Checkbox } from 'semantic-ui-react'

const ModuelsTable = (props) => {
let coreRoleModules = props.coreRoleModules,
moduleCodes = [];
coreRoleModules.map(item=>moduleCodes.push(item.moduleCode))


  let tableBudy=props.coreModulesList
  .map((item,index)=>{
    let edit=false;
    const isContcted= moduleCodes.includes(item.moduleCode)
   
    let isEdit=[...coreRoleModules]
    if(isEdit[0]!==undefined){
      isEdit = isEdit.filter(mod=>mod.moduleCode==item.moduleCode)
      if(isEdit[0]!==undefined){
        
      edit= isEdit[0].permissionType==2 
      
      }
    }
 
     return ( 
      <Table.Row key={index}>
      <Table.Cell>
      <Checkbox onChange={props.handleAddNewRM} id={item.moduleCode}  checked={isContcted} />
      </Table.Cell>
      <Table.Cell>
       {item.moduleName}
      </Table.Cell>
      <Table.Cell>
      <Checkbox  onChange={props.handleEditToggle}  value={item.moduleCode} disabled={!isContcted} checked={edit}  toggle />


      </Table.Cell>
   
      
    </Table.Row>
     )





  })
  

  return (
      <div>
            <Table>
  <Table.Header>
    <Table.Row>
    <Table.HeaderCell>Actvicte or disable</Table.HeaderCell>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Can Edit</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
      {tableBudy}
  </Table.Body>
  </Table>   
      </div>
  )
}


export default ModuelsTable;