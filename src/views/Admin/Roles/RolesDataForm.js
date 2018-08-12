import React from 'react'
import { Form, Input, Button,Checkbox,Message } from 'semantic-ui-react'
import { handleChange } from '../../../actions/items';

const RolesDataForm = (props) => {


    const display = props.displayForm? "":"none"
const formStyle={
    marginBottom: 20,
    display:display
}

let formData={
    roleName:"",
    roleDescription:""

 
   



}

if(Object.keys(props.userData).length!==0){
    formData=props.userData

}

if(props.edit==true){




    return (
      
        <Form error={props.err} style={formStyle} size='large'>
        <Form.Group >
        <Form.Field  disabled value={formData.roleCode} id='roleCode'  control={Input} label='Role Code' placeholder='Role Code' />

        <Form.Field onChange={props.handeFromC} value={formData.roleName} id='roleName'   control={Input} label='Role Name' placeholder='Role Name' />
      </Form.Group>
          <Form.Group >
          <Form.TextArea onChange={props.handeFromC} value={formData.roleDescription} id='roleDescription'  label='Role Description' placeholder='Role Description' />

          </Form.Group>

    
        <Form.Field  onClick={props.handleSubmit} id='form-button-control-public' control={Button} content='Save'  />
        <Message
      error
      
      content={props.msg} />
  

      </Form>
    )

}else{
    return (



        <Form style={formStyle} size='large'>
        <Form.Group >
        <Form.Field onChange={props.handeFromC} value={formData.roleName} id='roleName'   control={Input} label='Role Name' placeholder='Role Name' />
      </Form.Group>
      <Form.Group >
        <Form.TextArea onChange={props.handeFromC} value={formData.roleDescription} id='roleDescription'  label='Role Description' placeholder='Role Description' />
      </Form.Group>
      <Form.Field  onClick={props.handleSubmit}  id='form-button-control-public' control={Button} content='Save'  />
    </Form>
    




          
       
    )

}
 
 
}

export default RolesDataForm