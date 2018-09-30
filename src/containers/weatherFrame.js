import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class WeatherFrame extends Component {
  render(){
    return()
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    locations: state.locations
  }
}
export default connect(mapStateToProps)(App);
