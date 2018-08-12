import React, { Component, } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'






class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Tel-aviv' }
    this.onChange = (address) => this.setState({ address })
    
    
  
  }


  handleChange=(event)=> {
    this.setState({address: event});
  }




  handleFormSubmit = () => {
  
    geocodeByAddress(this.state.address)
      .then(results =>   getLatLng(results[0]))
      .then(latLng =>{
    this.props.HandelnewGeoFence({

      
     ...this.props.newGeoFence,
     address:this.state.address,
     longPos: latLng.lng,
     latPos:latLng.lat,  
     userId:Number(this.props.DataDetails.userId)
 
     
 
            })
          
  })
      .catch(error => console.error('Error', error))
     
      
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange:this.handleChange,
      onBlur:this.handleFormSubmit
     
    }

    const myStyles = {
      root: {
      zIndex:"1",
      fontSize:"85%",
     },
      input: { width: '100%',
      border:"1px solid #3c4b5b",
      color: '#151b1e',
      marginBottom:"21px",
      marginLeft: '6%',
      width: "80%",
      borderRadius: "5px",
      height:"46px"
      
    },
      autocompleteContainer: {
      opacity: "1",
      borderRadius:"4px",
      color: 'white',
      border:"1px solid #3c4b5b"

      },
      autocompleteItem: { 
  
    },
      autocompleteItemActive: { color: 'white',

     },
      googleLogoContainer:{display:"none"}
    }
  

    return (
    <PlacesAutocomplete
      inputProps={inputProps}
      styles={myStyles}
      



    />
  )
  }
}

export default Search;