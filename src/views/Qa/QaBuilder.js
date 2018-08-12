import React, { PropTypes } from 'react'
import Iframe from 'react-iframe'
const QaBuilder = props => {
    return (
        <div>
              <Iframe url="../qa/"
        height="80vh" 
        margin-top="-81px"
        id="myId"
        display="initial"
        position="relative"
        allowFullScreen/> 
        </div>
    )
}



export default QaBuilder