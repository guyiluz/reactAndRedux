// lib
import React from 'react'
var sha1 = require('sha1');
import { Message } from 'semantic-ui-react'

import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configureStore from '../../store/configureStore';




import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
const URL = window.localStorage.getItem("hereORootURl") 

const store = configureStore();

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application

// Temp fix for reactstrap
import '../../scss/core/_dropdown-menu-right.scss'

// Containers

// Views



// components

 
// other

class Loggin extends React.Component {
    constructor(){
 super()

this.state={
email :"",
password:"",
islogin:0

}
    }
// 
    HandleChange = e=> {
        
        this.setState({ [e.target.name]:e.target.value} );
        
      }

      Handlesubmit = e=> {
        

        e.preventDefault();
        
        let {email, password}=this.state

        if(email.length==0||password.length==0){
  this.setState({
                islogin:-1
            })
            return false

        }
        
        fetch('https://builder.hereofamily.com/core.svc/UserLogin', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:email,
                hashedPassword:sha1(password)})
        
        }).then(res => res.json())
        .then((data)=>{
            
        if(data.UserLoginResult==-3 ||data.LoginUserResult==-2){
            this.setState({
                islogin:-1
            })}
            
            if(data.UserLoginResult>0){
 
                
              const userToken=   data.userTokenOut,
              menuJsonFile= data.menuJsonFile
                localStorage.setItem("hereoToken",userToken);
                localStorage.setItem("nav",menuJsonFile);
                

                

                
                this.setState({
                    islogin:1
                })}
                
                window.open("/","_self")


       
                
            })
     

        
        
      }
  
    render() {
let {email,password,islogin} =this.state

let msg= ""
if(islogin==-1){
msg = 

<Message warning>
    <Message.Header></Message.Header>
    <p>wrong password or email</p>
  </Message>

}


     
    return (

            <div className ="conitner">
       
             <div className ="loggin-Box">
         
             <img src={require('../../img/hereo-icon.png')}/> 
              <form onSubmit={this.Handlesubmit}>
               <input type="email" placeholder="Email" value={email} name="email" onChange={this.HandleChange} />
               <input type="password" placeholder="Password" value={password} name="password" onChange={this.HandleChange}/>
               <button>Login</button>
              
              </form>
              {msg}


             </div>
         

             </div>
          
            
        )
    }
}

export default Loggin;

