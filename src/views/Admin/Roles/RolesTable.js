import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button,Input,Form,TextArea,Select,Icon } from 'semantic-ui-react'

import Moment from 'react-moment';

const RolesTable = (props) => {



         
       
    

    let tableBudy=props.list
    .map((role,index)=>{

       return ( 
        <Table.Row key={index}>
        <Table.Cell>
         {role.roleId}
        </Table.Cell>
        <Table.Cell>
         {role.roleName}
        </Table.Cell>
        <Table.Cell>
         {role.roleDescription}
        </Table.Cell>
        <Table.Cell>
         <Icon  color="blue" id={role.roleCode}  onClick={props.handleDisplyForm} link name='edit' /> 
        </Table.Cell>
     
        
      </Table.Row>
       )





    })
    

    return (
        <div>
              <Table>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {tableBudy}
    </Table.Body>
    </Table>   
        </div>
    )
}

export default RolesTable
