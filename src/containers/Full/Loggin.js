import React, { Component } from 'react'
import {connect} from "react-redux";

 class Loggin extends Component {
constructor(props){
super(props)

this.state={
    username:"",
    password:""


}


}


HandleChange = e=> {
        
    this.setState({ [e.target.name]:e.target.value} );
    
  }




  Handlesubmit = e=> {
        

    e.preventDefault();
    
    let {email, username}=this.state

    if(email.length==0||username.length==0){
  alert("Some filfes are empty ")

    }
    
 
 

    
    
  }






  render() {
      const {username,password}=this.state
    return (
      <div>
    <div className ="conitner">
       
       <div className ="loggin-Box">
   
        <form >
         <input type="text" placeholder="use name" value={username} name="username" onChange={this.HandleChange} />
         <input type="password" placeholder="Password" value={password} name="password" onChange={this.HandleChange}/>
         <button>Login</button>
        
        </form> 


       </div>
   

       </div>


      </div>
    )
  }
}




const mapStateToProps = (state) => {
    return {
  
  
  
  
    };
  };
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
        
  
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps,)(Loggin);
  
  