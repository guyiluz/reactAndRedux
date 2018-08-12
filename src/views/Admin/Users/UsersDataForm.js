import React from 'react'
import { Form, Input, Button,Checkbox,Message,Select } from 'semantic-ui-react'
import { handleChange } from '../../../actions/items';

const UsersDataForm = (props) => {


    const display = props.displayForm? "":"none"
const formStyle={
    marginBottom: 20,
    display:display
}

let formData={
    email:"",
    password:"",
    lastName:"",
    firstName:"",
    roleType:"",
    userImage:""
 
   



}

if(Object.keys(props.userData).length!==0){
    formData=props.userData

}

if(props.edit==true){




    return (
      
        <Form style={formStyle} size='large'>
        <Form.Group >
        <Form.Field onChange={props.handeFromC} value={formData.firstName} id='firstName'  control={Input} label='First Name' placeholder='First Name' />
        <Form.Field  onChange={props.handeFromC} value={formData.lastName} id='lastName'  control={Input} label='Last Name' placeholder='Last Name' />
        </Form.Group>
        <Form.Group >
        <Form.Field onChange={props.handeFromC} value={formData.roleType} id='roleType' options={props.rolesOption}  type="number" control={Select} label='Role Type' placeholder='Role Type' />
        <Form.Field   value={""} onChange={props.handeFromC} id='userImage'  type="file" control={Input} label='User image' />
      </Form.Group>
    
    
    
        <Form.Group >
        <Form.Field onChange={props.userCode} value={formData.userCode} id='userCode'   control={Input} label='User Code' placeholder='user Code' />
        <Checkbox checked ={formData.isDeleteImage}  value={!formData.isDeleteImage} onChange={props.handeFromC} id='isDeleteImage'   label='Delete Image' />
        <Checkbox  checked ={formData.isActive} value={!formData.isActive} onChange={props.handeFromC} id='isActive'    label='Active' />
    
      </Form.Group>
    
    
      <Form.Field  onClick={props.handleSubmit} id='form-button-control-public' control={Button} content='Save'  />
    </Form>
    
    )

}else{
    return (
        <Form error={props.err} style={formStyle} size='large'>
        <Form.Group >
          <Form.Field onChange={props.handeFromC} value={formData.email} id='email' control={Input} label='Email' placeholder='joe@schmoe.com' />
          <Form.Field onChange={props.handeFromC} value={formData.password} id='password' type='password' control={Input} label='Password' placeholder='password' />
          </Form.Group>
          <Form.Group >
          <Form.Field onChange={props.handeFromC} value={formData.firstName} id='firstName'  control={Input} label='First Name' placeholder='First Name' />
          <Form.Field  onChange={props.handeFromC} value={formData.lastName} id='lastName'  control={Input} label='Last Name' placeholder='Last Name' />
          </Form.Group>
          <Form.Group >
          <Form.Field onChange={props.handeFromC} value={formData.roleType} id='roleType' options={props.rolesOption}   type="number" control={Select} label='Role Type' placeholder='Role Type' />
          <Form.Field   value={formData.userImage} onChange={props.handeFromC} id='userImage'  type="file" control={Input} label='User image' />
        </Form.Group>
    
        <Form.Field  onClick={props.handleSubmit} id='form-button-control-public' control={Button} content='Save'  />
        <Message
      error
      
      content={props.msg} />
  

      </Form>
    )

}
 
 
}

export default UsersDataForm