import React from 'react'
import Moment from 'react-moment';
import {Table  } from 'reactstrap';
import {CSVLink, CSVDownload} from 'react-csv';
import moment from "moment"
var _ = require('lodash');


const LogTable = (props) => {
    
    let th =[]
    let logTableData=props.logTableData
    let dataTable= [].concat(props.log) 
    .map((tr,index)=>{
 let trs=[] 
 Object.keys(tr).forEach(function(key) {

    if(logTableData.td.includes(key)){
        
        trs.push({ key: key,
                order: logTableData.td.indexOf(key),
                 value:tr[key]
        })
        
      
    }
    
});

trs = _.sortBy(trs, [function(o) { return o.order; }]);

trs = trs.map((item)=>{


    if(item.key=="Reason"){

if(item.value==null){
    item.value="None"


}else{

    item.value=[...props.reasonLogList]
    .find((reson)=>{
        return  reson.value==item.value
    }).text

}

        



    }
    
    if(item.key.includes("Date")){
        
        var dateString = moment.unix(item.value).format("MM/DD HH:mm:ss");
   

        return  <td>{dateString}  </td>
   
    }


    if(item.key.includes("SerialNum")){
        let link =`http://testws.hereo.co.uk/logs/${item.value}.txt`

    
   

    return  <td><a target="_blank" href={link}>{item.value}</a> </td>
   
    }


    else if (item.key=="LocationSource"){

        switch (item.value) {
            case 1:
            item.value="GPS"
                break;
               
        
                    case 2:
                    item.value="wifi"
                        break;
        
                        case 3:
                        item.value="Ble"
                            break;
                            case 4:
                            item.value="GSM"
                                break;
                        
                    
            default:
                break;
        }
        
        return  <td>{item.value}</td>
    }
   
    return  <td>{item.value}</td>
})








   return(
    <tr key={index}>
    
    {trs}   
    
    
    </tr>

   )




    })

    let ths = logTableData.th.map(item=><th>{item}</th>)
    return (
        <div style={{minHeight:"590px"}}>
                      <div> <CSVLink data={props.log} >Download CSV</CSVLink>
                
       
             
             <Table striped responsive className="profile-table text-capitalize" >
             <thead>
             <tr>
            {ths}
             </tr>
             </thead>
             <tbody>
             {dataTable}
             </tbody>
           </Table> 
           </div>  
                   </div>
    )
}

export default LogTable