import React from 'react'
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import {
  Select,
  Dropdown,
  Button,
  Container,
  Icon,
  Checkbox,
  Form
} from 'semantic-ui-react'


import DropDownLine from "./DropDownLine"
import {makeEl} from "../../containers/Profile/makeFilter";

const ProfileLine = (props) => {


 let addLine = ()=>{
props.addLine()

  }


  const deletLine =(event)=>{

    const  value= event.currentTarget.value
 props.handleDeletLine(value)
 


  }
  let {itemList, profileElement, profileFilters} = props
  let profileLines = <div>*</div>

  if (profileFilters.filters[0] !== undefined) {

    profileLines = profileElement.map((line, index) => {
 
let dropDownLineProprs=
{
  onDropChange:props.onDropChange,
  thatprops:props,
  itemList:itemList,
  profileFilters:profileFilters,
  line:line,
  index:index

}



      return (

        <tr key={index}>



        
            <DropDownLine {...dropDownLineProprs} name ={"if"} itemListName={"if"} />
            <DropDownLine  {...dropDownLineProprs}  name ={"locate"}  itemListName={"location"}/>
            <DropDownLine  {...dropDownLineProprs}  name ={"ping"}  itemListName={"network"}/>
            <DropDownLine  {...dropDownLineProprs}  name ={"send"}  itemListName={"notifications"}/>
            <td> 
            <Button.Group>
            <Button onClick={addLine} icon>
        <Icon name='add square' />
       

      </Button>


      <Button  value={index} onClick={deletLine} icon>
        <Icon name='trash' />
       

      </Button>
        
           
            </Button.Group>
            
            </td>
  


        </tr>

      )

    })
  }

  return (profileLines)
}

export default ProfileLine