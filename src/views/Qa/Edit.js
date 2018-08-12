import React from 'react'
import Iframe from 'react-iframe'

const URL = window.localStorage.getItem("hereORootURl") 

const Edit = (props) => {


   const  {profileId,onEdit} =  props.location.query,
   modeId= props.location.query.modeId||null
   

    const id =   props.location.search.replace("?","")
const url = `${URL}/mode/?profileId=${profileId}&modeId=${modeId}&onEdit=${onEdit}`

  
return (   <div>



        <Iframe url={url}
    height="80vh" 
    margin-top="-81px"
    id="myId"
    display="initial"
    position="relative"
    allowFullScreen/> 
    </div>)
    
 

}

export default Edit