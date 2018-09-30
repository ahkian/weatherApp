import React, { Component } from 'react';
import { connect } from 'react-redux';
import { key } from '../apiKey.js';
import '../weather.css';

class WeatherFrame extends Component {
  locationGet = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?q=brooklyn&APPID=${key}`, {
      cache: 'default'
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  render(){
    return(
      <React.Fragment>
        <button onClick={this.locationGet}>Get Weather</button>
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
export default connect(mapStateToProps)(WeatherFrame);
