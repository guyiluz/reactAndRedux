import React from 'react';

    const Box =(props)=>{

        const {time,header,id,handleTimerObj,timerName} =props
        const BoxStyle ={
          
          "height": "74px",
          "width": "222px",
          "borderRadius": "28px",
          margin:10,
          cursor:"pointer",
          "backgroundImage":"linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"

   
       
        }
  
   const   headerStyle={
          
    fontFamily: "'Source Sans Pro'",
    fontSize: "23px",
    fontWeight: "600",
    color:  timerName==id?"#ebf1f2": " #71A5B5",
    textAlign: "center",
    textTransform: "uppercase"
          
  
  
        }
  
  
        const timeStyle ={
  
          "fontSize": "30px",
          "fontWeight": "600",
          color:  timerName==id?"#ebf1f2": " #71A5B5",
          "textAlign": "center",
          "letterSpacing": "0.05em"
        }
            
  
        return(
  <div  className="boxCon" id={id} onClick={handleTimerObj} style={BoxStyle} >
  <header style={headerStyle}>
  {header}
  
  </header>
  <section>
    <p style={timeStyle}>{time}</p>
  </section>
  
        </div>
  
  
        )
  
      }



      export default Box