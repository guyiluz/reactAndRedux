import React from 'react';

    const Box =(props)=>{

        const {time,header,id,handleTimerObj,timerName} =props
        const BoxStyle ={
          
          "height": "74px",
          "width": "222px",
          "backgroundColor": "#24b6f7",
          "border": "1px solid #707070",
          "borderRadius": "9px",
          "boxShadow": "0px 3px 6px 0px #000000",
          margin:10,
          cursor:"pointer"

        
          
        }
  
   const   headerStyle={
          
    fontFamily: "'Source Sans Pro'",
    fontSize: "23px",
    fontWeight: "600",
    color:  timerName==id?"#454545": "#ebf1f2",
    textAlign: "center",
    textTransform: "uppercase"
          
  
  
        }
  
  
        const timeStyle ={
  
          "fontSize": "30px",
          "fontWeight": "600",
          color:  timerName==id?"#454545": "#ebf1f2",
          "textAlign": "center",
          "letterSpacing": "0.05em"
        }
            
  
        return(
  <button  id={id} onClick={handleTimerObj} style={BoxStyle} >
  <header style={headerStyle}>
  {header}
  
  </header>
  <section>
    <p style={timeStyle}>{time}</p>
  </section>
  
        </button>
  
  
        )
  
      }



      export default Box