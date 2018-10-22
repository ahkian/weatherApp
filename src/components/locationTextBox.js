import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_LOCATION } from '../types.js';
import { CITIES } from '../cityList.js';

class LocationBox extends Component {

  constructor(){
    super()
    this.state = {
      textValue: ""
    }
  }

  changeHandler = (e) => {
    this.setState({
      textValue: e.target.value
    })
  }

  cityFind = (city) => {
    var cityID = null
    for (let i = 0; i < CITIES.length; i++){
      if (CITIES[i].name === city){
        cityID = CITIES[i].id
      }
    }
    return (cityID !== null ? cityID : "City not Found")
  }

  submitHandler = () =>{
    let cityId = this.cityFind(this.state.textValue)
    let action = {
      type: ADD_LOCATION,
      payload: {
        name: this.state.textValue,
        id: cityId
      }
    }
    this.props.dispatch(action)
  }

  render(){
    return(
      <React.Fragment>
        <input placeholder='Enter Location Name' type='text' value={this.state.textValue} onChange={this.changeHandler}></input>
        <button onClick={this.submitHandler}>Submit</button>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    locations: state.locations
  }
}

export default connect(mapStateToProps)(LocationBox);
