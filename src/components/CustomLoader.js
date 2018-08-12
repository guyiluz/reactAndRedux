import React from 'react';
import ReactLoading from 'react-loading';

const CustomLoader = (props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
            
            
            }}>
            <ReactLoading type="cubes" color={props.color||"#1678c2"} height={50} width={50} />
            </div>
    );
};

export default CustomLoader;