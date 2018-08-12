import React from 'react';
import { Icon } from 'semantic-ui-react'

const FleetDeviceViewConitner = () => {
    return (
        <div style={{
            marginBottom: 0,
            fontSize: "1rem",
            fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
            display: 'flex',
           width: "100%",
           justifyContent:"space-between"
        
        
                }} >  
                <div>              <Icon  name='database' />
       
       Device Data
       </div>
       <div style={{width:"15%"}} >              <Icon  name='fa' />
       
       
       </div>
           
                </div>
    );
};

export default FleetDeviceViewConitner;