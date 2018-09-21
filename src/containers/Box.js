import React from 'react';

    const Box =(props)=>{

        const {time,header,id,handleTimerObj,timerName} =props
        const BoxStyle ={
          
          "height": "74px",
          "width": "222px",
          "borderRadius": "4em",
          margin:10,
          cursor:"pointer",
          "background-image": "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
          "transition":"box-shadow 0.25s ease, transform 0.25s ease"
      

   
       
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