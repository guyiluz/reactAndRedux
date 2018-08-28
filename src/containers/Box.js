import React from 'react';

    const Box =(props)=>{

        const {time,header,id,handleTimerObj} =props
        const BoxStyle ={
          fontFamily: "'Source Sans Pro'",
          height: "119px",
          width: "210px",
          backgroundColor: "#994972",
          border: "1px solid #707070",
          borderRadius: "4px",
          boxShadow: "0px 3px 6px 0px #000000a1"
        }
  
   const   headerStyle={
          
            fontSize: "24px",
            fontWeight: "600",
            color: "#ebf1f2",
            textAlign: "center",
            letterSpacing: "2px"
          
  
  
        }
  
  
        const timeStyle ={
  
          fontSize: "38px",
          fontWeight: "600",
          color: "#ffffff",
          textAlign: "center",
          letterSpacing: "0.05em"
        }
            
  
        return(
  <div  id={id} onClick={handleTimerObj} style={BoxStyle} >
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