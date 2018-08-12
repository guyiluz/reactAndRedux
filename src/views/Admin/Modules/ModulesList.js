import React from 'react';

const ModulesList = (props) => {

    const moduleName=  [...props.list]   

    .map((item,index)=>{
    return (
    
        <li  key={index} className="nav-item">
        <a name={item.moduleCode}  >{item.moduleName}  </a> 
       
      </li>
    
    )
     
    
    })








    return (
        <div>

{moduleName}      
  </div>
    );
};

export default ModulesList;