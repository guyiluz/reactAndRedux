import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button,Input,Form,TextArea,Select,Icon } from 'semantic-ui-react'

import Moment from 'react-moment';

const VersionsTable = (props) => {
 const sim={
1:"Wyless",
2:"TelIt",
3:"Vodafone",
4:"Other",
5:"Telekom",
6:"ATT"  
 }


         
       
    

    let tableBudy=props.list
    .map((vr,index)=>{

       return ( 
        <Table.Row key={index}>
        <Table.Cell>
         {vr.id}
        </Table.Cell>
        <Table.Cell>
         {vr.build}
        </Table.Cell>
        <Table.Cell>
         {vr.name}
        </Table.Cell>
        <Table.Cell>
         {sim[vr.simCompanyType]}
        </Table.Cell>
        <Table.Cell>
         {vr.version}
        </Table.Cell>
        <Table.Cell>
         {vr.coreProfileId }
        </Table.Cell>
        <Table.Cell>
        <Icon  color="blue" id={vr.id}  onClick={props.handleDisplyForm} link name='edit' /> 
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
        <Table.HeaderCell>Build</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Sim</Table.HeaderCell>
        <Table.HeaderCell>Version</Table.HeaderCell>
        <Table.HeaderCell>Profile</Table.HeaderCell>
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

export default VersionsTable
