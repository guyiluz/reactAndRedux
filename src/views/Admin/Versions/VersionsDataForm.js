import React from 'react'
import { Form, Input, Button,Checkbox,Message,Select  } from 'semantic-ui-react'
import { handleChange } from '../../../actions/items';

const VersionsDataForm = (props) => {


    const display = props.displayForm? "":"none"
const formStyle={
    marginBottom: 20,
    display:display
}

let formData={
    name:"",
    version:"",
    build:"",
    downloadLink:"",
    simCompanyType:"" ,
    coreProfileId :""



}

if(Object.keys(props.userData).length!==0){
    formData=props.userData
    

}


    const options={
        1:"Wyless",
        2:"TelIt",
        3:"Vodafone",
        4:"Other",
        5:"Telekom",
        6:"ATT"  
         }


const Simoptions  = [
    { text: 'Wyless', value: 1 },
    { text: 'TelIt', value: 2 },
    { text: 'Vodafone', value: 3 },
    { text: 'Other', value: 4 },
    { text: 'Telekom', value: 5 },
    { text: 'ATT', value: 6 }
  ]
  

let profileOptions =[],
profileSelect=""

if(props.profilesList!==undefined){
    
    let profileOptions =[...props.profilesList]
    profileOptions= profileOptions.map((profile)=>{
        const profileObj={
        
            text:profile.Name , value: profile.CoreProfileId
        
        }
        
        return profileObj
        
        
        })
        profileSelect=     <Form.Field control={Select} label='Profile' value={formData.coreProfileId}  id='coreProfileId'  onChange={props.handeFromC} options={profileOptions} placeholder='profile' />

}

  
        
    return (

        // name:"",
        // version:"",
        // build:"",
        // downloadLink:"",
        // simCompanyType:"" 

        <Form style={formStyle} size='large'>
        <Form.Group >
        <Form.Field onChange={props.handeFromC} value={formData.name} id='name'   control={Input} label='version name' placeholder='Name' />
        <Form.Field onChange={props.handeFromC} value={formData.version} id='version'   control={Input} type="number" label='version' placeholder='version' />
        <Form.Field onChange={props.handeFromC} value={formData.build } id='build'   control={Input}  label='build' placeholder='build' />

       


      </Form.Group>
      <Form.Group >
        <Form.Field onChange={props.handeFromC}    value={formData.downloadLink } id='downloadLink'   control={Input}  label='Link' placeholder='download Link..' />
        <Form.Field control={Select} id="simCompanyType"  value={formData.simCompanyType} onChange={props.handeFromC} label='Sim company type ' options={Simoptions} placeholder='simCompanyType' />
{profileSelect}
      </Form.Group>
      <Form.Field  onClick={props.handleSubmit}  id='form-button-control-public' disabled={props.submitBtn} control={Button} content='Save'  />
    </Form>
    




          
       
    )

}
 
 


export default VersionsDataForm