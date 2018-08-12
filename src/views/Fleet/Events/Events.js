import React from 'react'
const moment =require('moment')
const Events = (props) => {
    const events=[...props.notificationsList]
    .map((item,index)=>{
const classCSS ="fleetEvent"
const active =item.notificationId==props.notificationId?"fleetEventActive":""
  return(
      <div onClick={props.handleEvetClick}  id={item.notificationId}   key={index} className={`${classCSS} ${active}`}>


<div className="fleetEventText">
{item.notificationText}
</div>
<div className="fleetEventsDate">
<div>{moment.unix(item.createdDate).format("MM/DD")}</div>
<div>{moment.unix(item.createdDate).format("HH:MM ")}</div>
</div>

      </div>
  )

    })


    return (
        <div className= "evetListBox"
            style={{
                height: "639px",
                overflowY: "scroll"
            }}
        >
           {events} 
        </div>
    )
}

export default Events