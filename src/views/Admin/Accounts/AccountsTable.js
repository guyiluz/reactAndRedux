import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button,Input,Form,TextArea,Select,Icon,Checkbox } from 'semantic-ui-react'

import Moment from 'react-moment';

const AccountsTable = (props) => {



         
       
    

    let tableBudy=props.list
    .map((item,index)=>{

       return ( 
        <Table.Row key={index}>
        <Table.Cell>
         {item.accountId}
        </Table.Cell>
        <Table.Cell>
         {item.accountName}
        </Table.Cell>
        <Table.Cell>
        <Moment format="YYYY/MM/DD"  unix>{item.createdDate}</Moment>
        </Table.Cell>
                <Table.Cell>
                <Checkbox  id={item.accountId} onChange={props.handleActiveAccount}  checked={item.isActive}  toggle />
        </Table.Cell>
      
  

      </Table.Row>
       )





    })
    

    return (
        <div>
              <Table>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Created Date</Table.HeaderCell>
        <Table.HeaderCell>Active</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {tableBudy}
    </Table.Body>
    </Table>   
        </div>
    )
}

export default AccountsTable
