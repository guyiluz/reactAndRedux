import React, { Component } from 'react';
import { Form, Input, TextArea, Button,Message } from 'semantic-ui-react'


class ChangePassword extends Component {
    render() {
        let {password,handleChagePassWordForm,err,msg}=this.props
        return (
            <div>
                 <Form    error ={err} >
              
        <Form.Group widths='equal'>
          <Form.Field onChange={handleChagePassWordForm} id='oldPassword' value={password.oldPassword} type="password" control={Input} label='current password' placeholder='current password' />
       
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field onChange={handleChagePassWordForm} id='newPassword'  value={password.newPassword}   type="password" control={Input} label='new password' placeholder='new password' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field  onChange={handleChagePassWordForm} id='newPasswordTest'  value={password.newPasswordTest}  type="password"  control={Input} label='confirm new password' />
        </Form.Group>
        <Message
      error
   
      content={msg}
      />
              </Form> 
            </div>
        );
    }
}



export default ChangePassword;