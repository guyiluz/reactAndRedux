import React from 'react'
import { Dropdown } from 'semantic-ui-react'
const ProfileDelete = (props) => {
    const options = [
        { key: 1, text: 'One', value: 1 },
        { key: 2, text: 'Two', value: 2 },
        { key: 3, text: 'Three', value: 3 },
      ]
      
      const renderLabel = label => ({
        color: 'blue',
        content: `Customized label - ${label.text}`,
        icon: 'check',
      })


    return (
        <div>
            <Dropdown
    multiple
    selection
    fluid
    options={options}
    placeholder='Choose an option'
    renderLabel={renderLabel}
  />
        </div>
    )
}

export default ProfileDelete