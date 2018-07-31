import React, {Component} from 'react';
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import {connect} from "react-redux";
import TImerContiner from './TImerContiner'







class Full extends Component {
  constructor(props){
  
    super(props)
    
  }




  componentDidMount(){
 
    
  }
  render() {
  


    return (
      <HashRouter>
      <div className="app">
        <div className="app-body">
          <main className="main">
      <TImerContiner/>
       
            
          </main>
        </div>
  
      </div>
      </HashRouter>
    );
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

export default connect(mapStateToProps,mapDispatchToProps,)(Full);



