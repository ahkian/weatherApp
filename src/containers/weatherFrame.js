import React, { Component } from 'react';
import { connect } from 'react-redux';
import { key } from '../apiKey.js';

class WeatherFrame extends Component {
  locationGet = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?id=5128638&APPID=${key}`)
    .then(res => JSON.parse(res))
    .then(json => console.log(json))
  }

  render(){
    return(
      <React.Fragment>
        <button onClick={this.locationGet}></button>
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
