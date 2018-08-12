import React from 'react'
import TimeAgo from 'react-timeago'




import {Pie} from 'react-chartjs-2';

import {
  Badge,
  Row,
  Col,
  Progress,
  Table,
  Card, CardBody,CardHeader
} from 'reactstrap';

import DashbordMap from "./DashbordMap"
import { Button,List,Icon,Header,Label } from 'semantic-ui-react'

import   {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  "recharts";



export class DashbordMain extends React.Component {

  

handleLineChartChange=(e)=>{
 
  this.props.handleLineChart(e.currentTarget.name);



}

  render() {
    const headerStyle={


      background: "#8d5afe",
      color: "white"
    
    }

 const   Cardstyle=  { height:400,
      fontSize: "1rem"
  }
    
  const btSntyle={

    background: "#8d5afe",
    color: "white",
    marginTop:15
  
  }
    
    

    const option ={
      strokeWidth:2,
      type:"monotone",
      dot:true}

let pieData ={labels:[...this.props.paiData]
 .map(item=>item.key), 
datasets: [{
  data:[...this.props.paiData]
  .map(item=>item.value), 
  backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#ff7a56',
    '#7a56ff',
    '#ce56ff',
    '#ff5687',
    '#56ffce',
    '#ff5687',
    '#87ff56',
    '#dcff56',
    '#5687ff',
    '#56dcff'

    
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#ff7a56',
  '#7a56ff',
  '#ce56ff',
  '#ff5687',
  '#56ffce',
  '#ff5687',
  '#87ff56'



  ]
}]
};











    const {chartData,dashboardNotifications,topNot,deviceList} =this.props

   const topNotif =deviceList.map((item,index)=>{
if(index<10){

  return <List.Item>
  <List.Content>
   <List.Header key ={index} as='a'><a onClick={this.props.hanleRedicer} id ={item.deviceId}>{item.deviceDisplayName}</a> {item.isOn && <Label color="red">
     On
    </Label>}
    
    </List.Header>  
  </List.Content>
  </List.Item>
  
  
}

    })


const notifactionList = dashboardNotifications
.map((note=>{

return (

<List.Item>
<List.Content>
 <List.Header as='a'>{note.notificationText}</List.Header>
  <List.Description as='a'><TimeAgo date={note.createdDate*1000}   /></List.Description>
</List.Content>
</List.Item>


)











}))
const boxShod= {    boxShadow:" 0px 4px 15px 0px #444d581c"}

    return (

<div>

<Row   style={{marginTop: "-13px"}} >
<Col xs="12" sm="6" lg="6">
<div>


</div>
 <DashbordMap style={boxShod} deviceLoaction={this.props.deviceLoaction}/>

</Col>
<Col xs="12" sm="6" lg="3">
             <Card  style=  {Cardstyle} >
        <CardBody style={{paddingBottom: 0}}>

        <CardHeader style={headerStyle}>
                <i className=""></i> Top Devices
              </CardHeader>


              <List divided relaxed>
             {topNotif}

 
             </List>
        </CardBody>
      </Card>



      </Col>
          <Col xs="12" sm="6" lg="3">

          <Card  style=  {Cardstyle} >
        <CardBody style={{paddingBottom: 0}}>

        <CardHeader style={headerStyle}>
                <i className=""></i> Last Notifications
              </CardHeader>


          
              <List divided relaxed>
              {notifactionList}
              
              </List>
        </CardBody>
      </Card>




          </Col>
         



        </Row>
        
       <Row>
       <Col xs="12" sm="6" lg="8">

       <Card  style=  {Cardstyle} >
        <CardBody style={{paddingBottom: 0}}>

        <CardHeader style={headerStyle}>
                <i className=""></i> Calls to server

              </CardHeader>
              <div>

<Button  style={btSntyle} onClick={this.handleLineChartChange}  name="daily">Daily</Button>
<Button    style={btSntyle}  onClick={this.handleLineChartChange}  name="weekly">Weekly</Button>

<Button   style={btSntyle}  onClick={this.handleLineChartChange} name="monthly" >Monthly </Button>
</div>
<div> 
      <ResponsiveContainer height={300} >

      <LineChart reverseStackOrder={true} data={chartData[this.props.chartParam]} >

<XAxis dataKey="key" />

<Tooltip />
<Line type="monotone"  stroke="#0093ee"  {...option} dataKey="value" stroke="#8884d8" />
</LineChart>

</ResponsiveContainer> 
</div>
        </CardBody>
      </Card>




          </Col>












       <Col xs="12" sm="6" lg="4">

       <Card  style=  {Cardstyle} >
       <CardBody style={{paddingBottom: 0}}>

       <CardHeader style={headerStyle}>
               <i className=""></i> Profiles per Device
             </CardHeader>
     
     <div >





 <Pie  width={200}
	height={120} data={pieData} />

   
       
    </div>
       </CardBody>
     </Card>



          </Col>



        </Row>

</div>

      
    )
}

}
export default DashbordMain
