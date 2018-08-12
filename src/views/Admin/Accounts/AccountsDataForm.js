import React from 'react'
import { Form, Input, Button,Checkbox,Message } from 'semantic-ui-react'
import { handleChange } from '../../../actions/items';

const AccountsDataForm = (props) => {


    const display = props.displayForm? "":"none"
const formStyle={
    marginBottom: 20,
    display:display
}

let formData={
    accountName:"",
    email:"",
    password:"",
    firstName:"",
    lastName:""

 
   



}
if(Object.keys(props.userData).length!==0){
    formData=props.userData

}




    return (



        <Form error={props.err}  style={formStyle} size='large'>
        <Form.Group >
        <Form.Field onChange={props.handeFromC} value={formData.accountName} id='accountName'   control={Input} label='Account Name' placeholder='Account Name' />
        <Form.Field onChange={props.handeFromC} value={formData.email} id='email'   type="email" control={Input} label='Email' placeholder='Email' />
        <Form.Field onChange={props.handeFromC} value={formData.password} id='password'   type="password" control={Input} label='Password' placeholder='password' />

        </Form.Group>
        <Form.Group >
        <Form.Field onChange={props.handeFromC} value={formData.firstName} id='firstName'   control={Input} label='First Name' placeholder='first Name' />
        <Form.Field onChange={props.handeFromC} value={formData.lastName} id='lastName'   control={Input} label='Last Name' placeholder='Last Name' /> 
      </Form.Group>
      <Form.Group >
      <Form.Field  onClick={props.handleSubmit}  id='form-button-control-public' control={Button} content='Save'  />
      </Form.Group>
          <Message
      error
      
      content={props.msg} />
  
    </Form>
    




          
       
    )


 
 
}

export default AccountsDataForm