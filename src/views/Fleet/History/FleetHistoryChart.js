import React from 'react'
import   {ResponsiveContainer, AreaChart, Area,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  "recharts";
import moment from "moment"

console.log(AreaChart)
const FleetHistoryChart = (props) => {
    const option ={
        strokeWidth:2,
        type:"monotone",
        dot:true}
 

    return (
        <div style={{    height: 115 }}> 


<ResponsiveContainer >

   	<AreaChart  isLive={props.isLive} liveInterval={props.liveInterval} data={props.data[props.sensor]} 
           >


                   <XAxis hide dataKey='date'/>
      
  

    
       <Tooltip/>
       <Area type="monotone" dataKey={props.sensor}  {...option}    stroke="#47a6da" />
  
      </AreaChart>
      </ResponsiveContainer>
        </div>
    )
}

export default FleetHistoryChart