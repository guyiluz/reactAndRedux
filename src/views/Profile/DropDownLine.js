import React from 'react'
import {
    Select,
    Dropdown,
    Button,
    Container,
    Icon,
    Checkbox,
    Form
  } from 'semantic-ui-react'
  import {makeEl} from "../../containers/Profile/makeFilter";
const DropDownLine = (props) => {

const {profileFilters,line,index,name,itemList,onDropChange,itemListName,thatprops} =props


return (
        <td>
        <Dropdown
              index={index}
              floating
              labeled
              button
              name={name}
              onChange={props.onDropChange}
              search
              value={line[name].element["0"].val}
              options={itemList[itemListName]}
              thatprops={thatprops} 
              />
              
            <Dropdown simple item  item icon='setting' name="setting" size="small">

              <Dropdown.Menu>

                <Dropdown.Item>
                  <Container fluid></Container >

                  <Form>

                    {makeEl(profileFilters.filters, line[name].element["0"].val,thatprops,index,name,line[name].settings)}

                  </Form>

                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            </td>
    )
}

export default DropDownLine