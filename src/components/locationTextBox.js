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

  submitHandler = () =>{
    let action = {
      type: ADD_LOCATION,
      payload: this.state.textValue
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
