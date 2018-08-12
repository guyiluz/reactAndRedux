import React, { Component } from 'react'
import { Button, Checkbox, Form,Dropdown,Input } from 'semantic-ui-react'

export default class ActiveDevice extends Component {
    state = {
      timzone:[],
    obj:{}


      
    }

    componentDidMount(){
      fetch("https://api.timezonedb.com/v2/list-time-zone?key=133NRHV7C5YD&format=json")
      .then((resp) => resp.json())
      .then((data)=>{
          this.setState({
            timzone:data.zones
          })
      })
      
    }
 
   
  render() {
    const {timzone} = this.state
    const {handleForm,obj} = this.props

    let timeZoneOp = []
    if(timzone.length!==0){

    }
        timeZoneOp =[...timzone]
 .map((time,index)=>{
  const obj={
    text:`${time.countryName}(${time.zoneName})`,
    value:`${time.gmtOffset}%%%${index}`,
  }
  return obj

    })
   

    return (
        <Form>
        <Form.Field>
          <label>ICCID</label>
          <Input id={"iccid"}  onChange={handleForm} value={obj.iccid}/>
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <Input id={"deviceName"}  onChange={handleForm} value={obj.deviceName} />
        </Form.Field>
        <Form.Field>
          <label>external Identifier</label>
          <Input id={"externalIdentifier"}  onChange={handleForm} value={obj.externalIdentifier} />
        </Form.Field>
        <Form.Field>
        <label>Time Zone</label>
          <Dropdown id={"timeZone"}  value={obj.timeZone} onChange={handleForm}  search selection options={timeZoneOp}/>
        </Form.Field>
      </Form>
    )
  }
}
