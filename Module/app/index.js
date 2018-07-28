import 'bootstrap';
import Holder from 'holderjs';
import $ from 'jquery';

import './styles/index.scss';
var sha1 = require('sha1');

/*
 * I didn't use arrow callback because in the current version of webpack
 * on production build it returns an error.
 */
var form = document.getElementById("btn")
form.onclick=(e)=>{  
  var form= document.getElementById("myForm").elements

  e.preventDefault() 
  
   var obj ={

    hashedPassword: sha1("YO4986yo"),
    email:form[0].value

   } 

}

