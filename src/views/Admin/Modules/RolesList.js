import React from 'react';

const RolesList = (props) => {

    const RolesName=  [...props.list]   

    .map((item,index)=>{
    return (
    
        <li  key={index} className="nav-item">
        <a name={item.roleCode} onClick={props.aTagClick}  >{item.roleName}  </a> 
       
      </li>
    
    )
     
    
    })








    return (
        <div>

{RolesName}      
  </div>
    );
};

export default RolesList;