import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button,Input,Form,TextArea,Select,Icon } from 'semantic-ui-react'

import Moment from 'react-moment';

const UsersTable = (props) => {



         
       
    

    let tableBudy=props.list
    .map((user,index)=>{
        const  userLastLogin =  user.lastLogin==null?"Not yet Login":<Moment format="YYYY/MM/DD HH:mm"  unix>{user.lastLogin}</Moment>

       return ( 
        <Table.Row key={index}>
        <Table.Cell>
         {user.firstName}
        </Table.Cell>
        <Table.Cell>
         {user.lastName}
        </Table.Cell>
        <Table.Cell>
        {user.email}
        </Table.Cell>
        <Table.Cell>
   {userLastLogin}
        </Table.Cell>
        <Table.Cell>
        <Moment format="YYYY/MM/DD"  unix>{user.createdDate}</Moment>
        </Table.Cell>
        {/* <Table.Cell>
  { [...props.roleList].filter((item)=>{

   if(item.roleType==user.roleType) {
     
    return item.roleName


   }
   

  })}


        </Table.Cell> */}
     
        <Table.Cell >
         {user.isActive? <Icon size="small" name="btn" onClick={props.handleDisplyForm} disabled name='check circle' />:<Icon size="small" disabled name='minus circle' /> }
        </Table.Cell>
   
        <Table.Cell>
         <Icon  color="blue" id={user.userCode}  onClick={props.handleDisplyForm} link name='edit' /> 
        </Table.Cell>
        <Table.Cell>
         <Icon onClick={props.ShowPop}   color="red" id={user.userCode}   link name='remove user' /> 
        </Table.Cell>
      </Table.Row>
       )





    })
    

    return (
        <div>
              <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Last Login</Table.HeaderCell>
        <Table.HeaderCell>Created Date</Table.HeaderCell>
        <Table.HeaderCell>Active</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell>
        <Table.HeaderCell>Remove</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {tableBudy}
    </Table.Body>
    </Table>   
        </div>
    )
}

export default UsersTable
