import React, { Component } from 'react';


class App extends Component {

constructor(props){
super(props)

this.state={
    num:0,
    intervalTIme:150
}

}

  pressTimer = ()=>{
const num =this.state.num +=1
const intervalTIme =this.state.intervalTIme +=-1
this.setState({
    num,
    intervalTIme
})

  } 




handleClick=()=>{
this.setState({
    num:this.state.num +=1


})

}

handelDown=()=>{

    const intervalTIme =this.state.intervalTIme

    let intervalId = setInterval(this.pressTimer, intervalTIme)
    this.setState({ intervalId: intervalId })

}
handelUp=()=>{
    clearInterval(this.state.intervalId)
    this.setState({
      
        intervalTIme:200
    })
}

    render() {
        return (
            <div >
                <p>{this.state.num}</p>
                <p>{this.state.intervalTIme}</p>
               <button  onMouseOut={this.handelUp} onMouseDown={this.handelDown}  onMouseUp={this.handelUp} onClick={this.handleClick}>add</button> 
            </div>
        );
    }
}

export default App;