import React, { Component, PropTypes } from 'react'
import { Label,Button, Icon } from 'semantic-ui-react'

class GeoCntrl extends Component {
    render () {
const lineStyle={

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"

}



        const {safeZName,safeZoneId,deleteSaveZone}=this.props
        return (
    
            <div style={lineStyle} >
            <div>
            <Label as='a' tag>{safeZName}</Label>
            </div>


    <Button onClick={deleteSaveZone} name={safeZoneId} color="red" icon labelPosition='left'>
      <Icon name='trash' />
      Delete
    </Button>
            </div>
        )
    }
}


export default GeoCntrl